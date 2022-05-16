import React from "react";
import PropTypes from "prop-types";

import {
  Modal,
} from "react-bootstrap";
import Image from "components/Image";

const PortfolioDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="mx-auto">
        <Image
          className="img-fluid d-block"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
        <p className="item-intro text-muted">{subheader}</p>
        <p>{content}</p>
      </Modal.Body>
    </Modal>
  );
};

PortfolioDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

PortfolioDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
};

export default PortfolioDetailDialog;
