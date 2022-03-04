import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card, Button } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";
import RsvpDialog from "components/RsvpDialog";

const ImageCard = ({
  className,
  imageFileName,
  imageAlt,
  header,
  subheader,
  extraInfo,
}) => {

  const [openRsvp, setOpenRsvp] = useState(false);
  const [guests, setGuests] = useState([]);
  const [guestName, setGuestName] = useState('');
  
  const handleOpenRsvp = useCallback(() => {
    setOpenRsvp(true);
  }, []);

  const handleHideRsvp = useCallback(() => {
    setOpenRsvp(false);
    setGuests([]);
    setGuestName('');
  }, []);

  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <RsvpDialog 
        show={openRsvp}
        guests={guests}
        guestName={guestName}
        onHide={handleHideRsvp}
        setGuests={setGuests}
        setGuestName={setGuestName}
      />
      <Image
        className="image img-bg"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-heading">{header}</div>
            <div className="intro-lead-in">{subheader}</div>
            <div className="wedding-location">Paliku Gardens</div>
            <div className="wedding-address">Kualoa Ranch, Kaneohe, HI 96744</div>
            <Button 
              className="rsvp-button" 
              onClick={handleOpenRsvp}>RSVP</Button>
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
