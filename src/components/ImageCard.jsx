import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card, Button } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";
import RsvpDialog from "components/RsvpDialog";
import CountdownTimer from "components/CountdownTimer";

const ImageCard = ({
  className,
  imageFileName,
  imageAlt,
  header,
  subheader,
  extraInfo,
}) => {

  const [openRsvp, setOpenRsvp] = useState(false);
  const [guest, setGuest] = useState({});
  const [guestName, setGuestName] = useState('');
  const [guestMembers, setGuestMembers] = useState([]);
  const [noUserFound, foundUser] = useState(false);

  const handleOpenRsvp = useCallback(() => {
    setOpenRsvp(true);
  }, []);

  const weddingDate = 'October 25, 2022 00:00:00'
  // const weddingDate = Date.now()

  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <RsvpDialog
        show={openRsvp}
        guest={guest}
        setGuest={setGuest}
        guestName={guestName}
        setGuestName={setGuestName}
        noUserFound={noUserFound}
        foundUser={foundUser}
        guestMembers={guestMembers}
        setGuestMembers={setGuestMembers}
        setOpenRsvp={setOpenRsvp}
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
            <CountdownTimer targetDate={weddingDate} />
            <div className="intro-lead-in">{subheader}</div>
            {/* <div className="wedding-location"></div> */}
            <div className="wedding-address">
              <p>Paliku Gardens</p>
              <p>Kualoa Ranch, Kaneohe, HI 96744</p>
            </div>
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
