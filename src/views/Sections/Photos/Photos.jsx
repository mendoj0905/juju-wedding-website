import React, { useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Gallery from 'react-photo-gallery';
import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PhotoItemNew from "components/PhotoItemNew";
import PageSection from "components/PageSection";
import photos from "./photo-test";
import "./Photos.scss";

const Photos = ({ className, frontmatter }) => {

  const imageRenderer = useCallback(
    ({ index, photo }) => (
      <PhotoItemNew
        index={index}
        photo={photo}
        photos={photos} />
    ), [])

  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <Gallery photos={photos} direction="row" renderImage={imageRenderer} />
      </Row>
    </PageSection>
  );
};

Photos.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Photos.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Photos;
