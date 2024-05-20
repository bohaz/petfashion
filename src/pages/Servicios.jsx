import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Card1 from '../assets/Icono5.png';
import Card2 from '../assets/Icono9.png';
import Card4 from '../assets/Icono8.png';
import Card5 from '../assets/arrow.svg';

function Servicios() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div
      className="p-4 pb-10 pt-10 flex flex-col gap-5 items-center bg-contain bg-center bg-pink-100"
      ref={ref}
    >
      <h1 className="font-bold mb-5 md:mb-10 text-4xl md:text-5xl xl:text-6xl text-center">Nuestros Servicios</h1>
      <div className="flex flex-col gap-5 items-center md:flex-row">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10"
        >

          <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
            <img className="w-60" src={Card4} alt="icono" />
            <img className="w-10 animate-bounce m-auto mt-2" src={Card5} alt="icono" />
            <button
              className="text-gray-800 bg-amber-400 hover:bg-amber-300 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition duration-300"
              type="button"
              onClick={() => handleNavigate('/Servicios')}
            >
              Agenda de horas
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
            <img className="w-60" src={Card1} alt="icono" />
            <img className="w-10 animate-bounce m-auto mt-2" src={Card5} alt="icono" />
            <button
              className="text-gray-800 bg-amber-400 hover:bg-amber-300 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition duration-300"
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
          <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
            <img className="w-60" src={Card2} alt="icono" />
            <img className="w-10 animate-bounce m-auto mt-2" src={Card5} alt="icono" />
            <button
              className="text-gray-800 bg-amber-400 hover:bg-amber-300 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition duration-300"
              type="button"
              onClick={() => handleNavigate('/SoloBano')}
            >
              Servicio de Baño
            </button>
          </div>
        </motion.div>

      </div>

    </div>

  );
}

export default Servicios;
