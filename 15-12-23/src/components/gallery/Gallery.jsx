import React, { useRef } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import GalleryImage from "../galleryImage/GalleryImage";
import "./Gallery.css";

function Gallery({ imagesGallery }) {
  const slider = useRef(null);

  const handleSlider = (type) => {
    if (type === "prev") {
      slider.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    } else {
      slider.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="slider" ref={slider}>
          <IoIosArrowDropleftCircle
            className="arrows arrow-left"
            onClick={() => handleSlider("prev")}
          />
          {imagesGallery.map((el) => (
            <GalleryImage key={el.id} imgObj={el} />
          ))}
          <IoIosArrowDroprightCircle
            className="arrows arrow-right"
            onClick={() => handleSlider("next")}
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
