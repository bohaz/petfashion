import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HuellaCorazon from '../assets/HuellaCorazon.png';
import HuellaCruz from '../assets/HuellaCruz.png';
import MedallaHuella from '../assets/MedallaHuella.png';
import Huesos from '../assets/Huesos.png';
import VideoButton from '../components/VideoButton';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div
      className="p-4 pt-10 pb-10 flex flex-col gap-5"
      style={{
        backgroundImage: `url(${Huesos})`,
        backgroundAttachment: 'fixed',
      }}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="font-bold text-4xl text-center text-neutral-800">Quiénes Somos</h1>
        <div className="flex flex-col items-center">
          <img className="w-52" src={MedallaHuella} alt="Huella" />
          <p className="bg-amber-200 p-3 rounded-lg shadow-lg shadow-neutral-400 text-center">
            Somos una empresa familiar dedicada a prestar el servicio
            de peluquería canina que tu mascota necesita.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-52" src={HuellaCruz} alt="Huella" />
          <p className="bg-amber-200 p-3 rounded-lg shadow-lg shadow-neutral-400 text-center">
            Nuestro equipo está conformado por un médico veterinario y una excelente
            estilista canina trabajando para usted.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-52" src={HuellaCorazon} alt="Huella" />
          <p className="bg-amber-200 p-3 rounded-lg shadow-lg shadow-neutral-400 text-center">
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
