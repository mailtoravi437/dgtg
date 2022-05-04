import "../Styles/global.css";
import { Link } from 'react-router-dom'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

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
      "description": "Industry experience – eCom, Healthcare, BFSI, Real esate & gaming."
    },
    {
      "image": "images/Home/slide-5.svg",
      "description": "Speed in execution and wider reach."
    },

  ]
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }} modules={[Autoplay,Pagination]} className="homeSlider"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {
        slide.map((ele, index) => {
          return <SwiperSlide key={index}><div className="home4 pb-5">
            <img src={ele.image} alt="" />
            <p>{ele.description}</p>
          </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};