import React from "react";
import PropTypes from "prop-types";

import "./PhotoItem.scss";
import PhotoDialog from "./PhotoDialog";

const PhotoItemNew = ({
  index,
  photo,
  photos,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);
  
  if (photo.srcOrginal) {
    delete photo.srcOrginal
  }

  return (
    <>
      <div className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          <img
            alt={photo.subheader}
            {...photo}
          />
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <p>{photo.subheader}</p>
            </div>
          </div>
        </a>
      </div>
      <PhotoDialog
        show={showDetail}
        onHide={handleHideDetail}
        index={index}
        photo={photo}
        photos={photos}
      />
    </>
  );
};

PhotoItemNew.propTypes = {
  index: PropTypes.any,
  photo: PropTypes.any,
  photos: PropTypes.array
};

PhotoItemNew.defaultProps = {
  index: null,
  photo: null,
  photos: []
};

export default PhotoItemNew;
