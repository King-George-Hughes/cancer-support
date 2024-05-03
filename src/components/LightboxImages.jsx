import React from "react";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import { PropTypes } from "prop-types";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";

const LightboxImages = ({ images }) => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom, lgVideo, lgAutoplay]}
      elementClassNames="columns-1 gap-3 lg:gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8"
      pager={false}
      thumbnail={true}
      autoplayFirstVideo={false}
    >
      {images?.map((image, index) => {
        return (
          <React.Fragment key={index}>
            <Link to={image}>
              <img
                loading="lazy"
                className="hover:scale-[1.02] duration-300 mb-5 rounded-md"
                src={image}
              />
            </Link>
          </React.Fragment>
        );
      })}
    </LightGallery>
  );
};

LightboxImages.propTypes = {
  images: PropTypes.any,
};

export default LightboxImages;
