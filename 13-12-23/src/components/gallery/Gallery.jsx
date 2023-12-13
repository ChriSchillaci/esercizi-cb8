import React from "react";
import GalleryImage from "../galleryImage/GalleryImage";
import "./Gallery.css";

function Gallery({imagesGallery}) {
  return (
    <div className="gallery">
      {imagesGallery.map((el) => (
        <GalleryImage key={el.id} imgObj={el} />
      ))}
    </div>
  );
}

export default Gallery;
