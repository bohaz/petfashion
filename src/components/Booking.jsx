import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import One from '../assets/one.svg';
import Two from '../assets/two.svg';
import Three from '../assets/three.svg';

function Booking() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      className="p-4 pb-10 pt-10 flex flex-col gap-5 items-center bg-contain bg-center bg-pink-100"
      ref={ref}
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <h1 className="font-bold mb-5 md:mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-gray-800">Antes de Agendar</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400 shadow-xl flex flex-col items-center">
          <img className="w-20 m-auto mt-2" src={One} alt="icono" />
          <p className="text-gray-800">
            No usamos bozal ni sedación.
            La idea principal es brindar BIENESTAR,
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
          <img className="w-20 m-auto mt-2" src={Two} alt="icono" />
          <p className="text-gray-800">
            No recibimos mascotas con pulgas y/o garrapatas.
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
          <img className="w-20 m-auto mt-2" src={Three} alt="icono" />
          <p className="text-gray-800">
            No rapamos mascotas.
            Nos enfocamos en prestar un servicio saludable acorde a la raza.
          </p>
        </div>
      </motion.div>

    </div>
  );
}

export default Booking;
