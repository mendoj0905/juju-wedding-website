import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import WeddingMember from "components/WeddingMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./WeddingParty.scss";

const WeddingParty = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    weddingMembers,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {weddingMembers.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header}>
            <WeddingMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">{rootContent}</p>
        </Col>
      </Row>
    </PageSection>
  );
};

WeddingParty.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

WeddingParty.defaultProps = {
  className: null,
  frontmatter: null,
};

export default WeddingParty;
