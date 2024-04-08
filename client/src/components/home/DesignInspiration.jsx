// //DesignInspiration.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
// import { useNavigate } from 'react-router-dom';
// // Import Swiper styles
// import 'swiper/css'; 
// import 'swiper/css/navigation'; 
// import 'swiper/css/pagination'; 
// import 'swiper/css/scrollbar'; 
// //import 'swiper/css/effect-cube'; 
// import './DesignInspiration.css';

// export const DesignInspiration = () => {
//   const navigate = useNavigate();

//   const slides = [
//     { image: '/ImageL.jpg', title: 'First Product' },
//     { image: '/TGW-OSCC.jpg', title: 'Second Product' },
//     { image: '/ImageR.png', title: 'Third Product' },
//   ];
//   return (
//     <section className="design-inspiration">
//        <div className="wrapper">
//          <div className="text-section">
//           <h2 className="section-title">50+ Beautiful Design Inspirations</h2>
//           <p className="section-description">Our designers have already created many beautiful prototype rooms that will inspire you.</p>
//           {/* <button>Explore more</button> */}
//           <button className="explore-button" onClick={() => navigate('/gallery')}>Explore</button>
//          </div>
//       </div>
//       <div class="image-scroller"></div>
//     <Swiper
//       ref={swiperRef}
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={5}
//       slidesPerView={3}
//       breakpoints={{
//       //   // When window width is <= 480px
//            480: {
//              slidesPerView: 1,
//             //  spaceBetween: 5,
//          },
//       //   // When window width is <= 768px
//            768: {
//              slidesPerView: 2,
//             //  spaceBetween: 10,
//         },
//         // When window width is <= 1024px
//         1024: {
//           slidesPerView: 3,
//           // spaceBetween: 15,
//         },
//        }}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       className="swiper-container"
//       effect={'cube'}
//       cubeEffect={{
//          shadow: true,
//          slideShadows: true,
//          shadowOffset: 20,
//          shadowScale: 0.94,
//       }}
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.image}>
//           <img src={slide.image} alt={slide.title} className="swiper-slide-image"/>
//         </SwiperSlide>
        
//       ))}
     
//     </Swiper>
//     {/* <button className="gallery-button" onClick={() => navigate('/gallery ')}>Gallery</button> */}

//   </section>
//   );
  
// }

// export default DesignInspiration;


//DesignInspiration.jsx
//import React from 'react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/scrollbar'; 
//import 'swiper/css/effect-cube'; 
import './DesignInspiration.css';

export const DesignInspiration = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const navigateSlide = (direction) => {
    if (direction === 'next' && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    } else if (direction === 'prev' && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slides = [
    { image: '/ImageL.jpg', title: 'First Product' },
    { image: '/TGW-OSCC.jpg', title: 'Second Product' },
    { image: '/ImageR.png', title: 'Third Product' },
  ];
  return (
    <section className="design-inspiration">
       <div className="wrapper">
         <div className="text-section">
          <h2 className="section-title">50+ Beautiful Design Inspirations</h2>
          <p className="section-description">Our designers have already created many beautiful prototype rooms that will inspire you.</p>
          {/* <button>Explore more</button> */}
          <button className="explore-button" onClick={() => navigate('/gallery')}>Explore</button>
         </div>
      </div>
      <div class="image-scroller"></div>
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      breakpoints={{
      //   // When window width is <= 480px
           480: {
             slidesPerView: 1,
            //  spaceBetween: 5,
         },
      //   // When window width is <= 768px
           768: {
             slidesPerView: 2,
            //  spaceBetween: 10,
        },
        // When window width is <= 1024px
        1024: {
          slidesPerView: 3,
          // spaceBetween: 15,
        },
       }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-container"
    >
      {slides.map((slide,index) => (
        <SwiperSlide key={index} onClick={(e) => {
          const swiperWidth = e.currentTarget.offsetWidth;
          const clickPosition = e.clientX - e.currentTarget.getBoundingClientRect().left;
          const direction = clickPosition > swiperWidth / 2 ? 'next' : 'prev';
          navigateSlide(direction);
        }}>
          <img src={slide.image} alt={slide.title} className="swiper-slide-image"/>
        </SwiperSlide>
        
      ))}
     
    </Swiper>
    {/* <button className="gallery-button" onClick={() => navigate('/gallery ')}>Gallery</button> */}

  </section>
  );
  
}

export default DesignInspiration;









