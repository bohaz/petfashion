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

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className="relative mt-16 md:mt-20 pt-2 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-800 opacity-70 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
        <h1 className="text-2xl md:text-6xl font-bold text-pink-400">Pet fashion - Peluquería canina</h1>
        <p className="text-xl md:text-4xl md:mt-6 font-shadows font-bold">Especialistas en estética canina</p>
      </div>
      <Slider {...settings}>
        <div className="flex items-stretch">
          <img className="w-full h-auto" src={Pet1} alt="Pet1" />
        </div>
        <div>
          <img className="w-full h-auto" src={Pet2} alt="Pet2" />
        </div>
        <div>
          <img className="w-full h-auto" src={Pet3} alt="Pet3" />
        </div>
        <div>
          <img className="w-full h-auto" src={Pet4} alt="Pet4" />
        </div>
        <div>
          <img className="w-full h-auto" src={Pet5} alt="Pet5" />
        </div>
        <div>
          <img className="w-full h-auto" src={Pet6} alt="Pet6" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
