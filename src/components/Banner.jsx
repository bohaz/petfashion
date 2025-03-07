import React from 'react';
import { useLocation } from 'react-router-dom';
import background from '../assets/GroomingTools2.webp';

function Banner() {
  const location = useLocation();

  // Definir mensajes dinámicos según la ruta actual
  const pageTitles = {
    '/': 'Peluquería Canina',
    '/about': 'Sobre Nosotros',
    '/servicios': 'Nuestros Servicios',
    '/contact': 'Contáctanos',
  };

  const pageSubtitles = {
    '/': 'Especialistas en estética canina',
    '/about': 'Conoce nuestra historia y valores',
    '/servicios': 'Descubre nuestros servicios para tu mascota',
    '/contact': 'Ponte en contacto con nosotros',
  };

  // Si la ruta no está definida, usar el título por defecto
  const currentTitle = pageTitles[location.pathname] || 'Peluquería Canina';
  const currentSubtitle = pageSubtitles[location.pathname] || 'Especialistas en estética canina';

  return (
    <div
      className="relative flex flex-col justify-center text-center font-bold mt-24 p-3 h-96 text-white tracking-wide"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura para mejorar la visibilidad del texto */}
      <div className="absolute inset-0 bg-neutral-900 opacity-90" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 relative z-10">
        <div className="order-1 md:order-1 text-center md:text-left">
          {/* Manteniendo Pet Fashion en el título y agregando el texto dinámico */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
            Pet
            {' '}
            <span className="font-shadows text-teal-400">Fashion</span>
            {' '}
            -
            {' '}
            {currentTitle}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 drop-shadow-lg">
            {currentSubtitle}
          </p>
          <div className="flex flex-col items-center lg:items-start justify-center mb-5">
            <p className="text-xl">⭐⭐⭐⭐⭐</p>
            <p className="text-center text-gray-300 drop-shadow-md">5,0 en Google Maps</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
