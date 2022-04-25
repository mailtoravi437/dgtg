import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from "swiper";
import BlogCard from './BlogCard';

import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import 'swiper/css';

export default function BlogCarousel(props) {
    const blogList = props.blogList;
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
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4 ,
          spaceBetween: 50,
        },
      }}
    >
      {
        blogList.map((blog, index) => {
          return <SwiperSlide key={index}>
              <BlogCard
                  key={blog.id}
                  title={blog.attributes.title}
                  thumbnail={blog.attributes.thumbnail.data.attributes.url}
                  slug={blog.attributes.slug}
                />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}
