import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./EventItem.scss";

const EventItem = ({ iconName, imageFileName, header, subheader, content }) => {
  let iconPart;
  if (iconName) {
    iconPart = <CircleFAButton iconName={iconName} />;
  }

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} alt={header}/>;
  }
  return (
    <>
      {iconPart}
      {imagePart}
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-muted">{subheader}</p>
      <p className="text-muted">{content}</p>
    </>
  );
};

EventItem.propTypes = {
  iconName: PropTypes.string,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

EventItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: "",
  subheader: "",
  content: "",
};

export default EventItem;
