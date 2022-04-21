import "../Styles/global.css";
import { Link } from 'react-router-dom'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Slider from "react-slick";

export default class Carosoul extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
        <div className="home4 pb-5">
                    <p>200+ Clients served in last 6 years</p>
          </div>
          <div className="home4 pb-5">
                    <p>200+ Clients</p>
          </div>
        </Slider>
    );
  }
}



