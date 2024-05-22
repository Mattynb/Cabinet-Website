import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import styles from "../../styles/Home/DesignInspiration.module.css";

const GalletySwiperSlide = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/gallery')
      .then(response => {
        setImages(response.data);
        console.log('Images fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <Swiper>
      {/*images.map((image, index) => (
        <SwiperSlide key={index}>
          <Link to="/gallery">
            <div
              className={styles.swiperItem}
              style={{
                backgroundImage: `url(${image})`,
              }}
              alt={`Image ${index + 1}`}
            />
          </Link>
        </SwiperSlide>
      ))*/}
    </Swiper>
  );
};

export default GalletySwiperSlide;
