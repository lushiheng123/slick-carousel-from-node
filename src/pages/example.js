import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { baseUrl } from "./config";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <h2>Fade</h2>
        <Slider {...settings}>
          <div className="img_container">
            <img src={baseUrl + "/1.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/2.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/3.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/4.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}
