import React from "react";

import PropTypes from "prop-types";

import { Row } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import WeddingInvite from "components/WeddingInvite";

const WeddingDetails = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="">
        <WeddingInvite 
          imageFileName={imageFileName}
        />
      </Row>
    </PageSection>
  );
};

WeddingDetails.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

WeddingDetails.defaultProps = {
  className: null,
  frontmatter: null,
};

export default WeddingDetails;