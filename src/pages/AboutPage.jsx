/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HuellaCorazon from '../assets/Icono1.png';
import HuellaCruz from '../assets/Icono2.png';
import MedallaHuella from '../assets/Icono3.png';

function AboutPage() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="p-4 py-20 flex flex-col gap-10 items-center bg-cream" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl text-grayDarker">
          Sobre
          {' '}
          <span className="font-shadows text-tealDark">Nosotros</span>
        </h1>
        <p className="text-lg text-grayDark md:text-xl mt-4">
          En
          {' '}
          <span className="font-shadows text-tealDark font-bold">Pet Fashion</span>
          {' '}
          brindamos un servicio de estética
          canina profesional con amor, y respeto por cada mascota.
        </p>
      </motion.div>

      {/* Sección de Valores */}
      {/* Sección de Valores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        {[{
          id: 'filosofia',
          icon: MedallaHuella,
          title: 'Nuestra Filosofía',
          text: 'Brindamos un servicio de calidad sin estrés para tu mascota, asegurando una experiencia positiva en cada visita.',
        }, {
          id: 'equipo',
          icon: HuellaCruz,
          title: 'Nuestro Equipo',
          text: 'Está conformado por dos estilistas caninos con más de 5 años de experiencia brindando el mejor cuidado.',
        }, {
          id: 'sin-bozal',
          icon: HuellaCorazon,
          title: 'Sin Bozal ni Sedación',
          text: 'Trabajamos con paciencia y amor para que cada mascota se sienta cómoda y segura.',
        }].map((item) => (
          <motion.div
            key={item.id} // Usamos un identificador único
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center border border-grayLight"
          >
            <img className="w-20 md:w-28 mb-4" src={item.icon} alt={item.title} />
            <h2 className="text-2xl font-bold text-grayDarker">{item.title}</h2>
            <p className="text-grayDark mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default AboutPage;
