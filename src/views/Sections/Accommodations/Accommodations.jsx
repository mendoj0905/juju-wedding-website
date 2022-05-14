import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Accommodations.scss"

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
    <PageSection className={clsx("accommodations-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <h4>Courtyard Oahu North Shore</h4>
      </Row>
      <Row>
        <Col sm={1} md={6}>
          <StaticImage
            className="img-responsive"
            src="../../../../content/assets/images/courtyard-marriot-northshore.png"
            alt="courtyard-marriot-northshore"
            layout="constrained"
          />
        </Col>
        <Col sm={1} md={6}>
          <p>A block of rooms is being held for our wedding from <span>Sunday, October 23</span> to <span>Wednesday, October 26</span>. A minimum of 2 nights is required to book. To make your reservation, please <a target="_target" href="https://www.marriott.com/events/start.mi?id=1650583046458&key=GRP">BOOK ONLINE</a>.</p>

          <ul className="hotel-information">
            <li><span>Address:</span> <a target="_target" href="https://g.page/CourtyardOahuNorthShore?share">55-400 Kamehameha Hwy, Laie, HI 96762</a></li>
            <li><span>Phone:</span> (808) 293-4900</li>
          </ul>

          <p>The hotel has NO resort fees, NO extra person charges, and NO destination fees.</p>
          
          <ul>
            <li>Standard 2 Queen - $244/night plus taxes</li>
            <li>Standard 1 King, Sofa Bed - $255/night plus taxes</li>
            <li>Deluxe 2 Queen, Sofa Bed - $275/night plus taxes</li>
          </ul>
          
          <p><span className="hotel-important">NOTE:</span> If you would like to extend your stay at the Courtyard, please book through the link first and then contact the hotel to extend.</p>

          <p>Transportation will be provided to and from the hotel and our wedding venue. Schedule will be posted soon.</p>
        </Col>
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
