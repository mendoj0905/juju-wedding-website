import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button, Row } from "react-bootstrap";

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
      <Row>
        <Button href="https://docs.google.com/spreadsheets/d/1rso2PQwa2lp90TPODRgjnVN30RDgfTOtYQ0FDEMJMZE/edit?usp=sharing" target="_blank" className="things-to-do-btn">See List</Button>
      </Row>
      <Row>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=15N3tisyd0a_wJ41-AYeyIQDrCZdasf9I&ehbc=2E312F" className="oahu-map" title="Oahu" />
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
