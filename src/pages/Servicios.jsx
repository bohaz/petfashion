import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div
      className="p-4 py-20 flex flex-col gap-5 items-center bg-contain bg-center bg-white"
      ref={ref}
    >
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
      <div className="flex flex-col gap-5 items-center md:flex-row">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >

          <div className="bg-cream rounded-xl flex flex-col items-center w-72 h-72">
            <img className="w-full rounded-t-xl h-48" src={Card1} alt="icono" />

            <button
              className="text-grayDarker mt-10 bg-white border-2 border-grayDark hover:outline hover:outline-grayDark outline-offset-4 font-semibold py-2 px-4 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300"
              type="button"
              onClick={() => handleNavigate('/CorteYBano')}
            >
              Corte y Baño
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="bg-customMint rounded-xl flex flex-col items-center w-72 h-72">
            <img className="w-full rounded-t-xl h-48" src={Card2} alt="icono" />

            <button
              className="text-grayDarker mt-10 bg-white border-2 border-grayDark hover:outline hover:outline-grayDark outline-offset-4 font-semibold py-2 px-4 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300"
              type="button"
              onClick={() => handleNavigate('/SoloBano')}
            >
              Servicio de Baño
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10"
        >

          <div className="bg-lavender rounded-xl flex flex-col items-center w-72 h-72">
            <img className="w-full rounded-t-xl h-48" src={Card4} alt="icono" />
            <button
              className="text-grayDarker mt-10 bg-white border-2 border-grayDark hover:outline hover:outline-grayDark outline-offset-4 font-semibold py-2 px-4 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300"
              type="button"
              onClick={() => handleNavigate('/Booking')}
            >
              Agenda de horas
            </button>
          </div>
        </motion.div>

      </div>

    </div>

  );
}

export default Servicios;
