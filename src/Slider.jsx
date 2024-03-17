import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
          }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slider-about-us">
                <img src="./img/users/01.jpg" alt="" />

                <p style={{marginBottom: '30px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut consequatur a quidem sapiente numquam reprehenderit blanditiis vel, fuga libero suscipit. Ex quos nulla quam incidunt. Nemo, expedita quis! Repellendus voluptatibus quis ipsa dolorem. In.</p>

                <p style={{color: '#ffc139', display: 'flex', gap: '8px', marginBottom: '15px'}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>

                <h4>Subrına Kabır</h4>
                <p style={{fontSize: '15px'}}>Lead Designer</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-about-us">
                <img src="./img/users/02.jpg" alt="" />

                <p style={{marginBottom: '30px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut consequatur a quidem sapiente numquam reprehenderit blanditiis vel, fuga libero suscipit. Ex quos nulla quam incidunt. Nemo, expedita quis! Repellendus voluptatibus quis ipsa dolorem. In.</p>

                <p style={{color: '#ffc139', display: 'flex', gap: '8px', marginBottom: '15px'}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>

                <h4>Zınnat Zaara</h4>
                <p style={{fontSize: '15px'}}>Senior UI / UX Designer</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-about-us">
                <img src="./img/users/03.jpg" alt="" />

                <p style={{marginBottom: '30px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut consequatur a quidem sapiente numquam reprehenderit blanditiis vel, fuga libero suscipit. Ex quos nulla quam incidunt. Nemo, expedita quis! Repellendus voluptatibus quis ipsa dolorem. In.</p>

                <p style={{color: '#ffc139', display: 'flex', gap: '8px', marginBottom: '15px'}}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>

                <h4>Subrına Kabır</h4>
                <p style={{fontSize: '15px'}}>Head of Idia</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
