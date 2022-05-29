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
        <p className="text-center">Feel free to checkout our Google Sheets with some of our reccommended places. We have a lot of food places!</p>

        <Button href="https://docs.google.com/spreadsheets/d/1rso2PQwa2lp90TPODRgjnVN30RDgfTOtYQ0FDEMJMZE/edit?usp=sharing" target="_blank" className="things-to-do-btn">See List (Google Sheets)</Button>

        <h4>Kualoa Ranch</h4>
        <p>Our venue, Kualoa Ranch, offers 20% off tours and activities for our guests which will be valid for 1 week prior to our wedding and run through 1 week after our wedding. Please use - <span>MENDOZA20</span> as the promotional code when booking at <a target="_blank" rel="noreferrer" href="https://www.kualoa.com/kualoa-tours-activities/">Kualoa Tours + Activities</a>.</p>
        <p>*Valid for tours from October 18, 2022 to November 1, 2022*</p>
      </Row>
      <Row>
        <h4>Oahu Map</h4>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=15N3tisyd0a_wJ41-AYeyIQDrCZdasf9I&ehbc=2E312F" className="oahu-map embed-responsive-item" title="Oahu" allowFullScreen />
        </div>
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
