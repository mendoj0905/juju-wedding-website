import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, crop, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query BaseImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  transformOptions: {
                    cropFocus: ATTENTION
                    fit: OUTSIDE
                  }
                )
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const image = images.edges.find((n) => n.node.relativePath.includes(fileName));

      if (!image) {
        return null;
      }
      const imageData = image.node.childImageSharp.gatsbyImageData;
      // if (crop === 'NORTH') {
      //   console.log(imageData)
      //   imageData.gatsbyImageData.transformOptions.cropFocus = 'NORTH'
      // }
      return <GatsbyImage alt={alt} image={imageData} {...restProps} />;
    }}
  />
);

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
  crop: PropTypes.string,
};

Image.defaultProps = {
  alt: null,
  crop: 'CENTER'
};

export default Image;
