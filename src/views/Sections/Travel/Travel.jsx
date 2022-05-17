import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Travel.scss"

const Travel = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
  } = frontmatter;

  return (
    <PageSection className={clsx("travel-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <h4>Itineraries</h4>
        <p>We&apos;ve provided some suggested itineraries including a detailed sample itinerary as-well-as the itinerary that we are going to follow. Feel free to use these as inspiration when planning your own schedule. We&apos;re also open to meeting up at any point during this trip.</p>
        <Button className="itinaries-btn">Sample Itineraries</Button>
        <h4>Covid-19 / Concerns</h4>
        <p>Your health and safety is most important to us. We want to assure you that our venue will take the proper precautions to ensure that you will have a safe and enjoyable time. Because the venue is in the North Shore of Oahy, there is plenty of open space to accommodate social distancing and there are also not that many tourists passing through the neighboring towns. We will continue to update this website and let you know if there are any changes.</p>
      </Row>
    </PageSection>
  );
};

Travel.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Travel.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Travel;
