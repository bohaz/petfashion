import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Servicios() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div className="flex flex-col p-4 pt-10 pb-10 gap-5 items-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="font-bold mb-5 md:mb-10 text-4xl md:text-5xl xl:text-6xl">Nuestros Servicios</h1>
        <div className="flex flex-col gap-4">
          <table className="table-auto border-collapse">
            <thead>
              <tr>
                <th className="text-center p-2 bg-pink-300" colSpan="2">Servicio de Corte y Baño</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-neutral-100 p-2">0kg hasta 5kg</td>
                <td className="bg-neutral-100 p-2">$20.000</td>
              </tr>
              <tr>
                <td className="p-2">5,1kg hasta 10kg</td>
                <td className="p-2">$25.000</td>
              </tr>
              <tr>
                <td className="bg-neutral-100 p-2">10,1kg hasta 20kg</td>
                <td className="bg-neutral-100 p-2">$30.000</td>
              </tr>
              <tr>
                <td className="bg-neutral-300 text-center font p-2 italic" colSpan="2">Los valores varían de acuerdo a la condición del pelaje de la mascota.</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto text-center border-collapse">
            <thead>
              <tr>
                <th className="text-center bg-pink-300 p-2" colSpan="2">Servicio Solo Baño</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-neutral-100 p-2">0kg hasta 5kg</td>
                <td className="bg-neutral-100 p-2">$15.000</td>
              </tr>
              <tr>
                <td className="p-2">5,1kg hasta 10kg</td>
                <td className="p-2">$20.000</td>
              </tr>
              <tr>
                <td className="bg-neutral-100 p-2">10,1kg hasta 20kg</td>
                <td className="bg-neutral-100 p-2">$25.000</td>
              </tr>
              <tr>
                <td className="bg-neutral-300 text-center p-2 italic" colSpan="2">Los valores varían de acuerdo a la condición del pelaje de la mascota.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default Servicios;
