import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";

import "./WeddingMember.scss";

const WeddingMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
}) => {
  return (
    <div className="wedding-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={header || imageAlt}
      />
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
    </div>
  );
};

WeddingMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
  }),
};

WeddingMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  social: {
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
  },
};

export default WeddingMember;
