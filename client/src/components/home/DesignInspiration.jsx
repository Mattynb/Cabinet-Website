import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './DesignInspiration.module.css';

const DesignInspiration = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.designInspiration}>
      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>50+ Beautiful Design Inspiration</h2>
        <p className={styles.sectionDescription}>Our designer already made a lot of beautiful prototype rooms that will inspire you</p>
        <div className={styles.callToAction1}>
          <button onClick={() => navigate('/gallery')}>Explore More</button>
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
            spaceBetween: 10
          }
        }
        }
      >
        <SwiperSlide>
          <Link to="/gallery">
            <div className={styles.swiperItem} style={{ backgroundImage: "url(https://media.discordapp.net/attachments/1215179484110790706/1226253331023003790/ImageL.jpg?ex=66241868&is=6611a368&hm=f9b040ffad011854fe5216b19f5cbf12bb663176410d351ddbbafc861a07b010&=&format=webp&width=936&height=702)" }} alt="Inspiration Left" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/gallery">
            <div className={styles.swiperItem} style={{ backgroundImage: "url(https://media.discordapp.net/attachments/1215179484110790706/1226253330083221547/TGW-OSCC.jpg?ex=66241868&is=6611a368&hm=6367f7eb96a3a14d069106184be3a6f9e70f65d31def58740430e6c38fe8875c&=&format=webp&width=1248&height=702)" }} alt="Inspiration Middle" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/gallery">
            <div className={styles.swiperItem} style={{ backgroundImage: "url(https://media.discordapp.net/attachments/1215179484110790706/1226253331484114954/ImageR.png?ex=66241868&is=6611a368&hm=a44e22802b24e04b2d61b20f8796b18cac02a8fcfea42742e266883ff99999fa&=&format=webp&quality=lossless&width=467&height=702)" }} alt="Inspiration Right" />
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className={styles.callToAction2}>
        <button onClick={() => navigate('/gallery')}>Explore More</button>
      </div>
    </div>
  );
};

export default DesignInspiration;









