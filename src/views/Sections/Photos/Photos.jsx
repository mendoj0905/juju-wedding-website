import React, { useCallback, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Gallery from 'react-photo-gallery';
import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PhotoItemNew from "components/PhotoItemNew";
import PageSection from "components/PageSection";
import "./Photos.scss";
import WeddingApi from "../../../libs/WeddingApi";

const Photos = ({ className, frontmatter }) => {

  const weddingApi = new WeddingApi();
  const [ photos, setPhotos ] = useState(async () => {
    const resp = await weddingApi.getPhotos('juju-wedding') 
    setPhotos(resp); 
  })

  const imageRenderer = useCallback(
    ({ index, photo }) => (
      <PhotoItemNew
        index={index}
        photo={photo}
        photos={photos} />
    ), [ photos ])

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
        { 
          photos.length > 0 && <Gallery photos={photos} direction="row" renderImage={imageRenderer} /> 
        }
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
