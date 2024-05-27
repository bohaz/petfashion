import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import One from '../assets/svg icons/one.svg';
import Two from '../assets/svg icons/two.svg';
import Three from '../assets/svg icons/three.svg';
import BookingButton from './BookingButton';

function Booking() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      className="p-4 pb-10 pt-10 flex flex-col items-center bg-contain bg-center bg-white"
      ref={ref}
    >
      <h1 className="font-bold mb-5 md:mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-gray-800">
        Antes de
        {' '}
        <span className="font-shadows text-pink-400">Agendar</span>
      </h1>
      <div className="p-4 pb-10 pt-10 flex flex-col gap-5 items-center bg-contain bg-center bg-white md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
            <img className="w-20 m-auto mt-1" src={One} alt="icono" />
            <p className="text-gray-800 md:text-lg">
              <span className="font-bold">No usamos bozal ni sedación.</span>
              {' '}
              La idea principal es brindar
              {' '}
              <span className="font-bold">BIENESTAR</span>
              ,
              para lo cual la mascota debe tolerar la manipulación.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
            <img className="w-20 m-auto mt-1" src={Two} alt="icono" />
            <p className="text-gray-800 md:text-lg">
              <span className="font-bold">No recibimos mascotas con pulgas y/o garrapatas.</span>
              {' '}
              La mascota debe ponerse al día con su comprimido o pipeta antiparasitaria.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
            <img className="w-20 m-auto mt-1" src={Three} alt="icono" />
            <p className="text-gray-800 md:text-lg">
              <span className="font-bold">No rapamos mascotas.</span>
              {' '}
              Nos enfocamos en prestar un servicio saludable acorde a la raza.
            </p>
          </div>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10"
      >
        <h2 className="font-bold mt-10 md:mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-gray-800">
          Cómo
          {' '}
          <span className="font-shadows text-pink-400">Agendar?</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold m-auto">
              1
            </div>
            <p className="text-gray-800 mt-2 text-center font-bold md:text-lg">Escríbenos Por Whatsapp</p>
          </div>
          <div className="h-0.5 w-10 bg-gray-400 md:w-0.5 md:h-10" />
          <div className="relative">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold m-auto">
              2
            </div>
            <p className="text-gray-800 mt-2 text-center font-bold md:text-lg">Te haremos algunas preguntas</p>
          </div>
          <div className="h-0.5 w-10 bg-gray-400 md:w-0.5 md:h-10" />
          <div className="relative">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold m-auto">
              3
            </div>
            <p className="text-gray-800 mt-2 text-center font-bold md:text-lg">Agendamos tu cita</p>
          </div>
          <div className="h-0.5 w-10 bg-gray-400 md:w-0.5 md:h-10" />
          <div className="relative">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold m-auto">
              4
            </div>
            <p className="text-gray-800 mt-2 text-center font-bold md:text-lg">Y ya está, es así de fácil.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <BookingButton />
        </div>
      </motion.div>
    </div>

  );
}

export default Booking;
