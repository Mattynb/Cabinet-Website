

import React from 'react';
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import { useNavigate, Link } from 'react-router-dom';
import './DesignInspiration.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Navigation } from 'swiper';


const DesignInspiration = () => {
   const navigate = useNavigate();

  return (
    <div className="design-inspiration">
      <div className="text-section">
        <h2 className="section-title">50+ Beautiful Design Inspiration</h2>
        <p className="section-description">Our designer already made a lot of beautiful prototypes of rooms that inspire you</p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper-container"
        >
          <SwiperSlide>
          <Link to="/page-for-imageL">
            <img className='swiper-item' src="/ImageL.jpg" alt="Inspiration Left" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/page-for-TGW-OSCC">
            <img className='swiper-item' src="/TGW-OSCC.jpg" alt="Inspiration Middle" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/page-for-imageR">
            <img className='swiper-item' src="/ImageR.png" alt="Inspiration Right" />
          </Link>
        </SwiperSlide>
       
       </Swiper>
        
      <button className="explore-button" onClick={() => navigate('/gallery')}>Gallery</button>
    </div>
  );
};
export default DesignInspiration;

