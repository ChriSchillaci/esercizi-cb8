import { Navigation, A11y, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/Homepage.module.scss";

export default function Homepage() {
  return (
    <div className={styles.Homepage}>
      <div className={styles["slider-container"]}>
        <Swiper
          modules={[Navigation, A11y, EffectCoverflow, Autoplay]}
          effect="coverflow"
          spaceBetween={50}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 4000 }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 2.5,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/300/500?random=1" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/300/500?random=2" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/300/500?random=3" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/300/500?random=4" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/300/500?random=5" alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/300/500?random=6" alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
