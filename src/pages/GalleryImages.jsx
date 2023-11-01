import React from "react";
import { galleryData } from "../data/data";
import { Link, useParams } from "react-router-dom";

const GalleryImages = () => {
  const { gallery_id, gallery_title } = useParams();
  const galleryArr = galleryData.find(
    (data) => data.id === +gallery_id && data.title === gallery_title
  );
  const { title, gallery } = galleryArr;

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap">
        {gallery.map((gal) => (
          <div className="w-full md:w-1/2 lg:w-1/4 h-[320px] p-5">
            <Link to={gal} target="_blank">
              <img
                src={gal}
                alt={title}
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
