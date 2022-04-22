import "../Styles/global.css";
import { Link } from 'react-router-dom'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {

  const slide = [
    {
      "image": "images/Home/slide-1.svg",
      "description": "200+ Clients served in last 6 years"
    },
    {
      "image": "images/Home/slide-2.svg",
      "description": "In-house performance network & media buying team."
    },
    {
      "image": "images/Home/slide-3.svg",
      "description": "Best-in-class creative, content, tech and production Folks."
    },
    {
      "image": "images/Home/slide-4.svg",
      "description": "200+ Clients served in last 6 years"
    },
    {
      "image": "images/Home/slide-5.svg",
      "description": "200+ Clients served in last 6 years"
    },

  ]
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        slide.map((ele) => {
          return <SwiperSlide><div className="home4 pb-5">
            <img src={ele.image} alt="" />
            <p>{ele.description}</p>
          </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};