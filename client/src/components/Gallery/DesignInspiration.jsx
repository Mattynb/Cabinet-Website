import React from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import GallerySwiperSlide from "./GallerySwiperSlide"
import styles from "../../styles/Home/DesignInspiration.module.css";

const DesignInspiration = (numberOfSlides) => {
  const navigate = useNavigate();
  return (
    <div className={styles.designInspiration}>
      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>
          50+ Beautiful Design Inspiration
        </h2>
        <p className={styles.sectionDescription}>
          Our designer already made a lot of beautiful prototype rooms that will
          inspire you
        </p>
        <div className={styles.callToAction1}>
          <button onClick={() => navigate("/gallery")}>Explore More</button>
        </div>
      </div>
      <Swiper
        slidesPerView={1.3}
        centeredSlides={true}
        modules={[Pagination]}
        pagination={{ dynamicBullets: true }}
        className={styles.swiperContainer}
        initialSlide={1}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        }}
      >
        <GallerySwiperSlide />
      </Swiper>
      <div className={styles.callToAction2}>
        <button onClick={() => navigate("/gallery")}>Explore More</button>
      </div>
    </div>
  );
};
export default DesignInspiration;
