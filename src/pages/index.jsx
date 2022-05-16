import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Footer from "views/Footer";
import * as Sections from "views/Sections";
import SEO from "components/SEO";
import Password from "components/password";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";
import fileNameToSectionName from "utils/fileNameToSectionName";
import showHideSection from "utils/showHideSection";
import { getPassword, setWeddingSession, getSessionPassword } from "utils/passwordUtil";

import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        keywords
        description
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          imageEngagement
          brand
          anchor
          clients {
            href
            imageFileName
          }
          content
          copyright
          header
          email
          imageFileName
          jumpToAnchor
          jumpToAnchorText
          menuText
          portfolios {
            content
            header
            subheader
            imageFileNameDetail
            imageFileName
          }
          privacyHref
          privacyText
          services {
            content
            header
            subheader
            iconName
            imageFileName
          }
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          subheader
          teamMember {
            header
            imageFileName
            social {
              facebook
              github
              linkedin
              medium
              twitter
            }
            subheader
          }
          telephone
          termsHref
          termsText
          title
          timeline {
            header
            imageContent
            imageFileName
            subheader
            content
          }
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, keywords, description },
    },
    allMarkdownRemark: { nodes },
  } = data;

  const { topNode, navBarNode, anchors, footerNode, sectionsNodes } = breakDownAllNodes(nodes);
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleHidePassword = useCallback(async () => {
    const isPasswordValid = await getPassword(password);
    if (isPasswordValid) {
      setWeddingSession();
      setShowPassword(false)
    } else {
      setWrongPassword(true);
    }
  }, [ password ]);


  return (
    <>
      <SEO title={title} keywords={keywords} description={description} />
      <Navbar
        anchors={anchors}
        frontmatter={navBarNode.frontmatter}
      />
      <Top frontmatter={topNode.frontmatter} />
      {
        // dynamically import sections
        sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
          const sectionComponentName = fileNameToSectionName(fileName);
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent && showHideSection(sectionComponentName) ? (
            <SectionComponent
              key={sectionComponentName}
              className={ind % 2 === 1 ? "bg-light" : "bg-white"}
              frontmatter={frontmatter}
            />
          ) : null;
        })
      }
      <Footer frontmatter={footerNode.frontmatter} />
      {!getSessionPassword() && <Password show={showPassword} onHide={handleHidePassword} isWrongPassword={wrongPassword} setPassword={setPassword}/>}
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
