import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import EventItem from "components/EventItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Event = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {services.map((service) => (
          <Col md={4} key={service.header}>
            <EventItem {...service} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Event.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Event.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Event;
