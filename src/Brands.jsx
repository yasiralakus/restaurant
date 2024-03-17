import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Brands() {

    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 700) {
          setSlidesPerView(3);
        } else {
          setSlidesPerView(6);
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="./img/brands/01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/03.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/04.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/05.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/06.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/02.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/03.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/04.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/05.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./img/brands/06.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
