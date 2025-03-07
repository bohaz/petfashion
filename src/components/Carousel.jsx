/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pet1 from '../assets/workImages/Dui.png';
import Pet2 from '../assets/workImages/Mota.png';
import Pet3 from '../assets/workImages/Mia.png';

const instagramLink = 'https://www.instagram.com/petfashiondogsalon/';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-4xl">
        <Slider {...settings} className="gap-x-6">
          {/* Imagen 1 */}
          <div className="flex justify-center px-3">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                className="w-80 h-auto shadow-md rounded-lg mx-auto transition-transform transform hover:scale-105 hover:brightness-110 duration-300"
                src={Pet1}
                alt="Pet1"
              />
            </a>
          </div>

          {/* Imagen 2 */}
          <div className="flex justify-center px-3">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                className="w-80 h-auto shadow-md rounded-lg mx-auto transition-transform transform hover:scale-105 hover:brightness-110 duration-300"
                src={Pet2}
                alt="Pet2"
              />
            </a>
          </div>

          {/* Imagen 3 */}
          <div className="flex justify-center px-3">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                className="w-80 h-auto shadow-md rounded-lg mx-auto transition-transform transform hover:scale-105 hover:brightness-110 duration-300"
                src={Pet3}
                alt="Pet3"
              />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
