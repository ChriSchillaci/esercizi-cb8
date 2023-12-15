import React from "react";
import "./GalleryImage.css";

function GalleryImage({ imgObj }) {
  return (
    <div className="gallery__image" id={imgObj.id}>
      <img src={imgObj.img} alt={imgObj.alt} />
    </div>
  );
}

export default GalleryImage;
