import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HuellaCorazon from '../assets/Icono1.png';
import HuellaCruz from '../assets/Icono2.png';
import MedallaHuella from '../assets/Icono3.png';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      className="p-4 pb-10 pt-10 flex flex-col gap-5 items-center bg-contain bg-center bg-white"
      ref={ref}
    >

      <h1 className="font-bold md:mb-5 text-4xl md:text-5xl xl:text-6xl text-center text-gray-800 relative">
        Quiénes
        {' '}
        <span className="font-shadows text-pink-400">Somos</span>
      </h1>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center md:flex-row">
          <img className="w-44 md:w-52" src={MedallaHuella} alt="Huella" />
          <p className="bg-amber-200 p-4 md:text-lg rounded-lg shadow-lg text-center max-w-lg text-gray-800 border-4 border-amber-400">
            Somos una empresa familiar dedicada a prestar el servicio
            de peluquería canina que tu mascota necesita.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center md:flex-row-reverse">
          <img className="w-52 md:w-60" src={HuellaCruz} alt="Huella" />
          <p className="bg-amber-200 p-4 md:text-lg rounded-lg shadow-lg text-center max-w-lg text-gray-800 border-4 border-amber-400">
            Nuestro equipo está conformado por un médico veterinario y una excelente
            estilista canina trabajando para usted.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center md:flex-row">
          <img className="w-44 md:w-52" src={HuellaCorazon} alt="Huella" />
          <p className="bg-amber-200 p-4 md:text-lg rounded-lg shadow-lg text-center max-w-lg text-gray-800 border-4 border-amber-400">
            No usamos bozal ni sedación. La idea principal es que tu mascota
            se sienta cómoda y segura.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
