/* eslint-disable react/button-has-type */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import MedallaHuella from '../assets/Icono3.png';
import Quotes from '../assets/svg icons/quotes.svg';

function AboutPreview() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <div className="p-4 py-20 flex flex-col gap-5 bg-cream" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="font-bold md:mb-10 lg:mb-14 text-4xl md:text-5xl xl:text-6xl text-grayDarker m-auto text-center">
          Quiénes
          {' '}
          <span className="font-shadows text-tealDark">Somos</span>
        </h1>
        <div className="flex flex-col items-center md:flex-row md:gap-6">
          <img className="w-32 md:w-44" src={MedallaHuella} alt="Huella" />
          <div className="text-left">
            <p className="font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl text-grayDarker">
              Somos una empresa
              {' '}
              <span className="font-shadows text-tealDark font-bold">familiar</span>
              {' '}
            </p>
            <div className="relative p-6 rounded-xl border-2 border-grayLight my-6 lg:w-96">
              <img className="absolute -top-4 left-6 w-10 bg-orange-100" src={Quotes} alt="Quotes" />
              <p className="italic text-grayDark">
                dedicada a brindar
                un servicio de peluquería canina con amor y respeto por los animales.
                Cada mascota es única, y en Pet Fashion le damos el cuidado que merece.
              </p>
            </div>

          </div>

        </div>
        <div className="m-auto text-center">
          <button
            onClick={() => navigate('/about')}
            className="mt-5 bg-orange text-white font-bold py-3 px-6 border-2 border-black rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            Conócenos más →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPreview;
