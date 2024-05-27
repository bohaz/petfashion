import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HuellaCorazon from '../assets/Icono1.png';
import HuellaCruz from '../assets/Icono2.png';
import MedallaHuella from '../assets/Icono3.png';
import Quotes from '../assets/svg icons/quotes.svg';

function About2() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      className="p-4 pb-10 pt-10 flex flex-col gap-5 items-center bg-contain bg-center bg-cream"
      ref={ref}
    >

      <h1 className="font-bold md:mb-20 text-4xl md:text-5xl xl:text-6xl text-center text-grayDarker">
        Quiénes
        {' '}
        <span className="font-shadows text-tealDark">Somos</span>
      </h1>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center md:flex-row md:mb-20 md:-ml-72">
          <img className="w-44 md:w-52" src={MedallaHuella} alt="Huella" />
          <div>
            <h2 className="font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl text-grayDarker">
              Somos una empresa
              {' '}
              <span className="font-shadows text-tealDark">familiar</span>
            </h2>
            <div className="relative p-6 md:text-lg rounded-xl text-center border-2 border-grayLight my-8">
              <img className="absolute -top-4 left-6 w-10 bg-orange-100" src={Quotes} alt="Quotes" />
              <p className="italic text-grayDark">
                Dedicada a prestar el servicio
                de peluquería canina que tu mascota necesita.
              </p>
            </div>
          </div>
        </div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center md:flex-row-reverse md:mb-20 md:-mr-96">
          <img className="w-52 md:w-60" src={HuellaCruz} alt="Huella" />
          <div>
            <h2 className="font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl text-grayDarker">
              Nuestro
              {' '}
              <span className="font-shadows text-tealDark">Equipo</span>
            </h2>
            <div className="relative p-6 md:text-lg rounded-xl text-center border-2 border-grayLight my-8 max-w-xl">
              <img className="absolute -top-4 left-6 w-10 bg-orange-100" src={Quotes} alt="Quotes" />
              <p className="italic text-grayDark">
                Está conformado por un médico veterinario y
                una excelente estilista canina trabajando para usted.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="flex flex-col items-center md:flex-row md:-ml-96">
          <img className="w-44 md:w-52" src={HuellaCorazon} alt="Huella" />
          <div>
            <span className="font-shadows text-tealDark font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl">No usamos</span>
            {' '}
            <h2 className="font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl text-grayDarker">
              bozal ni sedación.

            </h2>
            <div className="relative p-6 md:text-lg rounded-xl text-center border-2 border-grayLight my-8">
              <img className="absolute -top-4 left-6 w-10 bg-orange-100" src={Quotes} alt="Quotes" />
              <p className="italic text-grayDark">
                La idea principal es que tu mascota
                se sienta cómoda y segura.
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default About2;
