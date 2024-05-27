import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingButton from './BookingButton';

function CorteYBano() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div
      className="flex flex-col p-4 pt-10 pb-10 gap-5 items-center"
      ref={ref}
    >
      <h1 className="font-bold mb-5 md:mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-grayDarker">
        Servicio de
        {' '}
        <span className="font-shadows text-tealDark">Corte y Baño</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >

        <div className="flex flex-col gap-4">
          <table className="table-auto border-collapse shadow-lg w-full">
            <thead>
              <tr>
                <th className="text-center md:text-lg p-2 bg-pink-300 text-grayDarker" colSpan="2">Servicio de Corte y Baño</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-neutral-100 p-2 md:text-lg text-grayDarker">0kg hasta 5kg</td>
                <td className="bg-neutral-100 p-2 md:text-lg text-grayDarker">$20.000</td>
              </tr>
              <tr>
                <td className="bg-white p-2 md:text-lg text-grayDarker">5,1kg hasta 10kg</td>
                <td className="bg-white p-2 md:text-lg text-grayDarker">$25.000</td>
              </tr>
              <tr>
                <td className="bg-neutral-100 p-2 md:text-lg text-grayDarker">10,1kg hasta 20kg</td>
                <td className="bg-neutral-100 p-2 md:text-lg text-grayDarker">$30.000</td>
              </tr>
              <tr>
                <td className="bg-neutral-300 text-center font p-2 italic md:text-lg text-grayDarker" colSpan="2">Los valores varían de acuerdo a la condición del pelaje de la mascota.</td>
              </tr>
            </tbody>
          </table>
          <p className="bg-cream rounded-tr-xl rounded-bl-xl p-3 m-2 md:text-lg md:w-1/2 border-2 border-grayLight text-grayDarker">El servicio de Corte y Baño incluye: Vaciado glándulas anales, limpieza de oídos y corte de uñas.</p>
        </div>
        <div className="flex justify-center mt-5">
          <BookingButton />
        </div>
      </motion.div>
    </div>
  );
}

export default CorteYBano;
