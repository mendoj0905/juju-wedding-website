import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

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
    parents,
    bridesmaids,
    groomsmen,
    kids,
    sponsors,
  } = frontmatter;

  return (
    <PageSection className={clsx("wedding-party-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="border-bottom">
        {parents.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header} className="mx-auto">
            <WeddingMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row className="border-bottom wp-margin-top">
        {bridesmaids.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header} className="mx-auto">
            <WeddingMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row className="border-bottom wp-margin-top">
        {groomsmen.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header} className="mx-auto">
            <WeddingMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row className="border-bottom wp-margin-top">
        {kids.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header} className="mx-auto">
            <WeddingMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row className="wp-margin-top">
        {sponsors.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header} className="mx-auto">
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
