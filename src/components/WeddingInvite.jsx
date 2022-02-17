import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card, Button } from "react-bootstrap";
import Image from "components/Image";
import "./WeddingInvite.scss";

const WeddingInvite = ({ 
  className, 
  imageFileName, 
  imageAlt, 
  header, 
  subheader, 
  extraInfo 
}) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image img-bg" fileName={imageFileName} alt={imageAlt || header || subheader } />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="">
              <h2>When</h2>
              <p>October 25, 3:00 PM</p>
            </div>
            <div className="">
              <h2>Where</h2>
              <p>Paliku Gardens</p>
              <p>Kualoa Ranch, Kaneohe, HI 96744</p>
              <Button>RSVP</Button>
            </div>
            
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

WeddingInvite.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

WeddingInvite.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default WeddingInvite;