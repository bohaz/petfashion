import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import background from '../assets/GroomingTools2.webp';

function Instagram() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
        <h1 className="text-2xl md:text-5xl mb-2">PetFashion está en Instagram</h1>
        <p className="text-xl md:text-3xl">
          Siguenos
          {' '}
          <a
            href="https://www.instagram.com/pet_fashion17?igsh=MWx3eHVvYThrdm9nMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 underline hover:text-fuchsia-500"
          >
            @pet_fashion17
          </a>
        </p>

      </motion.div>
    </div>

  );
}

export default Instagram;
