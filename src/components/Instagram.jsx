import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from './Carousel';

function Instagram() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative flex flex-col justify-center text-center font-bold py-10 lg:py-24 px-4 text-grayDarker tracking-wide" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-2xl md:text-5xl mb-14">
          Pet
          {' '}
          <span className="font-shadows text-teal-400">Fashion</span>
          {' '}
          está en Instagram
        </h1>

        <div className="">
          <Carousel />
        </div>

      </motion.div>
    </div>

  );
}

export default Instagram;
