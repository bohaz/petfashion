import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import background from '../assets/GroomingTools.webp';
import BookingButton from './BookingButton';

function Visitanos() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative flex flex-col justify-center text-center font-bold p-3 h-96 text-white tracking-wide" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} ref={ref}>
      <div className="absolute inset-0 bg-neutral-800 opacity-80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-3xl md:text-5xl mb-2">Visítanos</h1>
        <p className="text-xl md:text-3xl">Lunes - Sábado: 9:00 - 18:00</p>
        <p className="text-xl md:text-3xl">Domingo: Cerrado</p>
        <p className="text-xl md:text-3xl">Estamos ubicados en la Calle Santa Luisa #51, Isla Negra</p>
        <div className="pt-4">
          <BookingButton />
        </div>
      </motion.div>
    </div>

  );
}

export default Visitanos;
