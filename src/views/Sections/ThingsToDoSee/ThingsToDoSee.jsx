import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./ThingsToDoSee.scss"

const ThingsToDoSee = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
  } = frontmatter;

  return (
    <PageSection className={clsx("things-to-do-see-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
    </PageSection>
  );
};

ThingsToDoSee.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

ThingsToDoSee.defaultProps = {
  className: null,
  frontmatter: null,
};

export default ThingsToDoSee;
