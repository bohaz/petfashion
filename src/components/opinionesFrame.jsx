import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Opiniones() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    // Crear un script dinámico para cargar Tagembed
    const script = document.createElement('script');
    script.src = 'https://widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white px-2 py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <h1 className="font-bold mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-grayDarker">
          <span className="font-shadows text-tealDark font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl">
            Opiniones
          </span>
          {' '}
          de nuestros clientes
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >

        <div
          className="tagembed-widget"
          style={{ width: '100%', height: '100%' }}
          data-widget-id="2152636"
          data-tags="false"
        />
      </motion.div>
    </div>
  );
}

export default Opiniones;
