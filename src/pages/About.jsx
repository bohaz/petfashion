import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HuellaCorazon from '../assets/Icono1.png';
import HuellaCruz from '../assets/Icono2.png';
import MedallaHuella from '../assets/Icono3.png';
import VideoButton from '../components/VideoButton';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div
      className="p-4 pt-10 pb-10 flex flex-col gap-5 items-center bg-contain bg-center bg-pink-100"
      style={{

      }}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="font-bold mb-5 md:mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-gray-800">Quiénes Somos</h1>
        <div className="flex flex-col items-center md:flex-row">
          <img className="w-52" src={MedallaHuella} alt="Huella" />
          <p className="bg-amber-200 p-4 md:text-lg rounded-lg shadow-lg shadow-pink-200 text-center max-w-lg text-gray-800">
            Somos una empresa familiar dedicada a prestar el servicio
            de peluquería canina que tu mascota necesita.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row-reverse">
          <img className="w-52" src={HuellaCruz} alt="Huella" />
          <p className="bg-amber-200 p-4 md:text-lg rounded-lg shadow-lg shadow-pink-200 text-center max-w-lg text-gray-800">
            Nuestro equipo está conformado por un médico veterinario y una excelente
            estilista canina trabajando para usted.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <img className="w-52" src={HuellaCorazon} alt="Huella" />
          <p className="bg-amber-200 p-4 md:text-lg rounded-lg shadow-lg shadow-pink-200 text-center max-w-lg text-gray-800">
            No usamos bozal ni sedación. La idea principal es que tu mascota
            se sienta cómoda y segura.
          </p>
        </div>
        <VideoButton videoId="6EK9DO9iZmw" />
      </motion.div>
    </div>
  );
}

export default About;
