import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Modal,
  Carousel
} from "react-bootstrap";

const PhotoDialog = ({
  onHide,
  index,
  photo,
  photos,
  ...restProps
}) => {

  const [i, setIndex] = useState(() => {
    return index
  })

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Carousel
        fade
        activeIndex={i}
        onSelect={handleSelect}
        interval={null}>
        {
          photos.map((p) => {
            return (
              <Carousel.Item key={p.subheader}>
                <img
                  alt={p.subheader}
                  src={p.src}
                  width="100%"
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>

    </Modal>
  );
};

PhotoDialog.propTypes = {
  onHide: PropTypes.func,
  index: PropTypes.any,
  photo: PropTypes.any,
  photos: PropTypes.array
};

PhotoDialog.defaultProps = {
  onHide: null,
  index: null,
  photo: null,
  photos: []
};

export default PhotoDialog;
