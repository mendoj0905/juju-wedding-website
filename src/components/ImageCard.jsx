import React from "react";
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

  const [openRsvp, setOpenRsvp] = React.useState(false);
  const handleOpenRsvp = React.useCallback(() => {
    setOpenRsvp(true);
  }, []);
  const handleHideRsvp = React.useCallback(() => {
    setOpenRsvp(false);
  }, []);

  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
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
      <RsvpDialog 
        show={openRsvp}
        onHide={handleHideRsvp}
      />
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
