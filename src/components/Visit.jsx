import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Visit() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Cambiado a false para que se repita cada vez que se llegue al componente
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col text-center font-bold p-2" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Visítanos</h1>
        <p>Lunes - Sábado: 9:00 - 18:00</p>
        <p>Domingo: Cerrado</p>
        <p>Estamos ubicados en la Calle Santa Luisa #51, Isla Negra</p>
      </motion.div>
    </div>
  );
}

export default Visit;
