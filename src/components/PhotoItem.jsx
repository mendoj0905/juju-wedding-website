import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";

import "./PhotoItem.scss";

const PhotoItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col md={4} sm={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          <Image
            className="img-responsive"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <p>{subheader}</p>
            </div>
          </div>
        </a>
      </Col>
      <PortfolioDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail || imageFileName}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

PhotoItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

PhotoItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  extraInfo: null,
};

export default PhotoItem;
