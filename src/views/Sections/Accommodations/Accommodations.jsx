import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
// import Image from "components/Image";

const Accommodations = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
  } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <h2>Courtyard Oahu North Shore</h2>
        <StaticImage
          className="img-responsive"
          src="../../../../content/assets/images/courtyard-marriot-northshore.png"
          alt="courtyard-marriot-northshore"
        />
        <p>A block of rooms is being held for our wedding for October 23 and October 26 To make your reservation, please <a target="_target" href="https://www.marriott.com/events/start.mi?id=1650583046458&key=GRP">BOOK ONLINE</a>.</p>
      </Row>
    </PageSection>
  );
};

Accommodations.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Accommodations.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Accommodations;
