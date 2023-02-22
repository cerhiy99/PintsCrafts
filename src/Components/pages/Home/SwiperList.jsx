import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperList = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y ]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
        <SwiperSlide style={{width:"100%"}}>
          <div className="swiper-slide-1">
            <video autoPlay={true} muted={true} style={{display:"flex",alignItems:"center",justifyContent:"center",objectFit: "cover", backgroundSize: "cover", opacity: "1", width: "100%", height: "100%", position: "absolute"}} loop="loop" preload="auto">
              <source src="/imgs/Beer2.mp4" type="video/mp4"/>
            </video>
            <div className="text__on__media1">
              відкривайте бренди. насолоджуйтесь унікальними смаками
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-2">
            <div className="img__container1">
              <img src="/imgs/main-home-slider-9.jpg"/>
            </div>
            <div className="text__on__media">
              Почніть розважатися зараз, спробуйте наше крафтове пиво
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-2">
            <div className="img__container1">
              <img src="/imgs/main-home-slider-10.jpg"/>
            </div>
            <div className="text__on__media">
              Почніть розважатися зараз, спробуйте наше крафтове пиво
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default SwiperList;
