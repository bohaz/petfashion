/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pet1 from '../assets/workImages/1.png';
import Pet2 from '../assets/workImages/5.png';
import Pet3 from '../assets/workImages/6.png';
import Pet4 from '../assets/workImages/7.png';
import Pet5 from '../assets/workImages/8.png';
import Pet6 from '../assets/workImages/9.png';

function Banner2() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="w-52" src={Pet1} alt="Pet1" />
        </div>
        <div>
          <img className="w-52" src={Pet2} alt="Pet2" />
        </div>
        <div>
          <img className="w-52" src={Pet3} alt="Pet3" />
        </div>
        <div>
          <img className="w-52" src={Pet4} alt="Pet4" />
        </div>
        <div>
          <img className="w-52" src={Pet5} alt="Pet5" />
        </div>
        <div>
          <img className="w-52" src={Pet6} alt="Pet6" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner2;
