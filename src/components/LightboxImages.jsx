import React from "react";
import { PropTypes } from "prop-types";
import LightGallery from "lightgallery/react";
import { Link } from "react-router-dom";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
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
        const isVideo = image.endsWith(".mp4");

        return (
          <React.Fragment key={index}>
            <Link
              to={image}
              data-lg-size={isVideo ? null : "1600-1067"} // Example for image sizing
              data-lg-video={
                isVideo
                  ? JSON.stringify({
                      source: image,
                      attributes: { autoplay: true, controls: true },
                    })
                  : null
              }
            >
              {isVideo ? (
                <video
                  src={image}
                  muted={false}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  loading="lazy"
                  className="hover:scale-[1.02] duration-300 mb-5 rounded-md"
                  src={image}
                  alt="Gallery Item"
                />
              )}
            </Link>
          </React.Fragment>
        );
      })}
    </LightGallery>
  );
};

LightboxImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default LightboxImages;

// import React from "react";
// import { Link } from "react-router-dom";
// import LightGallery from "lightgallery/react";
// import { PropTypes } from "prop-types";

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgVideo from "lightgallery/plugins/video";

// const LightboxImages = ({ images }) => {
//   return (
//     <LightGallery
//       speed={500}
//       plugins={[lgThumbnail, lgZoom, lgVideo, lgAutoplay]}
//       elementClassNames="columns-1 gap-3 lg:gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8"
//       pager={false}
//       thumbnail={true}
//       autoplayFirstVideo={false}
//     >
//       {images?.map((image, index) => {
//         return (
//           <React.Fragment key={index}>
//             <Link to={image}>
//               {image.endsWith(".mp4") ? (
//                 <video
//                   src={image}
//                   autoPlay
//                   muted
//                   loop
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <img
//                   loading="lazy"
//                   className="hover:scale-[1.02] duration-300 mb-5 rounded-md"
//                   src={image}
//                 />
//               )}
//             </Link>
//           </React.Fragment>
//         );
//       })}
//     </LightGallery>
//   );
// };

// LightboxImages.propTypes = {
//   images: PropTypes.any,
// };

// export default LightboxImages;
