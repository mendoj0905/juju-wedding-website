import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";

const ImageCard = ({ className, imageFileName, imageEngagement, imageAlt, header, subheader, extraInfo }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image img-bg" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-heading">{header}</div>
            {/* <Image 
              className="image mx-auto circle rounded-circle" 
              fileName={imageEngagement}
              alt="" /> */}
            <div className="intro-lead-in">{subheader}</div>
            
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
  imageEngagement: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageEngagement: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
