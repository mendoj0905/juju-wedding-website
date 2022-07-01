import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col, Button } from "react-bootstrap";

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
        <h4>Accommodations</h4>
      </Row>
      <Row>
        <Col sm={1} md={6}>
          <StaticImage
            className="img-responsive"
            // src="http://localhost:4000/photos/test.jpg"
            src="../../../../content/assets/images/courtyard-marriot-northshore.png"
            alt="courtyard-marriot-northshore"
            layout="constrained"
          />
        </Col>
        <Col sm={1} md={6}>
          <h5>Courtyard Oahu North Shore</h5>
          <p>A block of rooms is being held for our wedding from <span>Sunday, October 23</span> to <span>Wednesday, October 26</span>. A minimum of 2 nights is required to book. To make your reservation, please click the button below: </p>

          <Button className="text-center booking-btn" target="_target" href="https://www.marriott.com/events/start.mi?id=1650583046458&key=GRP">BOOK ONLINE</Button>

          <ul className="hotel-information">
            <li><span>Address:</span> <a target="_target" href="https://g.page/CourtyardOahuNorthShore?share">55-400 Kamehameha Hwy, Laie, HI 96762</a></li>
            <li><span>Phone:</span> (808) 293-4900</li>
          </ul>

          <p>The hotel has NO resort fees, NO extra person charges, and NO destination fees. On-site parking is $15 a night.</p>

          <ul>
            <li>Standard 2 Queen - $244/night plus taxes</li>
            <li>Standard 1 King, Sofa Bed - $255/night plus taxes</li>
            <li>Deluxe 2 Queen, Sofa Bed - $275/night plus taxes</li>
          </ul>

          <p><span className="hotel-important">NOTE:</span> If you would like to extend your stay at the Courtyard, please book through the link first and then contact the hotel to extend.</p>

          <p>On the day of the wedding, transportation will be provided to and from the Courtyard and our wedding venue. Schedule will be posted soon.</p>

        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Itinerary</h4>
          <p>We&apos;ve provided a suggested itinerary, as well as our itinerary which includes our detailed timeline. Feel free to use these as inspiration when planning your own schedule. We&apos;re also open to meeting up at any point during this trip.</p>
          <Button href="https://docs.google.com/spreadsheets/d/1IBDZRQG3U2Qs86xMmGg-ZXEPBshCPzh9HxQM_ZTPRUk/edit?usp=sharing" target="_blank" className="itinerary-btn">Itineraries (Google Sheets)</Button>

          <h4>Covid-19 / Concerns</h4>
          <p>Your health and safety is most important to us. We want to assure you that our venue will take the proper precautions to ensure that you will have a safe and enjoyable time. We will continue to update this website and let you know if there are any changes.</p>

          <p className="hawaii-covid-site-source border-top">Beginning March 26, 2022, there will be no COVID-related requirements for arriving domestic passengers. Travelers arriving in Hawaii directly from international airports must still comply with <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/international-travel/index.html" target="_blank" rel="noreferrer">U.S. federal requirements</a>; please consult with your airline.</p>
          <ul>
            <li>The federal mask mandate has ended on April 18, and masks are no longer required in airports. Many airlines have also relaxed their mask rules and it&apos;s now optional to wear on a plane.</li>
            <li>Hawaii&apos;s indoor mask mandate ended on March 25, 2022. Masks are still strongly recommended for people over age 65, those with compromised immune systems or who care for people at risk of severe illness, and those unvaccinated for COVID-19.</li>
            <li>Some businesses may still require or encourage the wearing of masks.</li>
          </ul>
          <h5>Source: <a target="_blank" href="https://www.gohawaii.com/travel-requirements" rel="noreferrer">Go Hawaii - Travel Requirements</a></h5>
        </Col>
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
