import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Asegúrate de tener esto instalado
import Card1 from '../assets/Corte.png';
import Card2 from '../assets/Baño.png';
import Card4 from '../assets/Agenda.png';

function Servicios() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const services = [
    {
      id: 1, title: 'Corte y Baño', image: Card1, path: '/CorteYBano', bgColor: 'bg-cream',
    },
    {
      id: 2, title: 'Servicio de Baño', image: Card2, path: '/SoloBano', bgColor: 'bg-customMint',
    },
    {
      id: 3, title: 'Agenda de horas', image: Card4, path: '/Booking', bgColor: 'bg-lavender',
    },
  ];

  return (
    <div className="px-4 py-20 flex flex-col gap-5 items-center bg-contain bg-center bg-white" ref={ref}>
      <Helmet>
        <title>Servicios de Peluquería Canina | Pet Fashion</title>
        <meta
          name="description"
          content="Descubre nuestros servicios de peluquería canina: corte, baño y agenda personalizada para tu mascota en Pet Fashion."
        />
        <link rel="canonical" href="https://www.petfashiondogsalon.cl/servicios" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <h1 className="font-bold mb-10 md:mb-20 text-4xl md:text-5xl xl:text-6xl text-center text-grayDarker">
          Nuestros
          {' '}
          <span className="font-shadows text-teal-600">Servicios</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative z-10 flex justify-center"
          >
            <div className={`${service.bgColor} rounded-xl flex flex-col items-center w-full sm:w-80 h-80`}>
              <img className="w-full rounded-t-xl h-48 object-cover" src={service.image} alt={service.title} />

              <button
                className="text-grayDarker mt-10 bg-white border-2 border-grayDark hover:outline hover:outline-grayDark outline-offset-4 font-semibold py-2 px-4 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300"
                type="button"
                onClick={() => handleNavigate(service.path)}
              >
                {service.title}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
