import React from 'react';
import Pet1 from '../assets/Bannerimage.png';

function Banner() {
  return (
    <div className="relative w-full h-auto md:h-[600px] bg-slate-100 py-16 mt-20">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">

        <div className="order-1 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800">
            Pet
            {' '}
            <span className="font-shadows text-teal-600">Fashion</span>
            {' '}
            - Peluquería canina
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-600">
            Especialistas en estética canina
          </p>
          <div className="flex flex-col items-center justify-center mb-5">
            <p className="text-xl">⭐⭐⭐⭐⭐</p>
            {' '}

            <p className="text-center text-gray-600">5,0 en Google Maps</p>
            {' '}
          </div>

        </div>

        {/* Imagen inclinada tipo tarjeta */}
        <div className="order-2 md:order-2 flex justify-center">
          <img
            src={Pet1}
            alt="Banner"
            className="w-72 h-auto md:w-96
                       md:mt-0
                       rounded-lg shadow-2xl transform rotate-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
