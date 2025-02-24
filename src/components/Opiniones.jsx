import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Google from '../assets/svg icons/google.svg';

function Opiniones() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="bg-customMint px-2 py-20" ref={ref}>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <h1 className="font-bold mb-10 text-4xl md:text-5xl xl:text-6xl text-center text-grayDarker">
          <span className="font-shadows text-tealDark font-bold md:mb-5 text-3xl md:text-4xl xl:text-5xl">Opiniones</span>
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
        <div className="flex items-center justify-center mb-5">
          <p className="text-center text-grayDarkerl">
            5,0 ⭐⭐⭐⭐⭐ 45 opiniones en
          </p>
          <img className="w-10 md:w-10" src={Google} alt="Google" />
        </div>
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <div className="p-4 border-2 border-grayDarker rounded-lg">
            <h2 className="font-bold">Macarena Zuñiga</h2>
            <p className="">⭐⭐⭐⭐⭐</p>
            <p className="">Excelente atención como siempre, muy buen trabajo y se ve que nuestras hijas perrunas son tratadas con mucho amor y preocupación, 100% recomendado y por supuesto seguiremos llendo</p>
          </div>

          <div className="p-4 border-2 border-grayDarker rounded-lg">
            <h2 className="font-bold">Antonia</h2>
            <p className="">⭐⭐⭐⭐⭐</p>
            <p className="">Me encantó 😊 mi perrita quedó hermosa, es primera vez en sus 15 años que llega feliz de la peluquería. La dejaron preciosa y se tomaron su tiempo para atenderla, además de preocuparse de que no sufriera con el corte. Se nota que lo pasó bien y que más que solo un baño fue como un spa para ella ❤️ la chica además suuper amable. Recomendadisimo!</p>
          </div>
          <div className="p-4 border-2 border-grayDarker rounded-lg">
            <h2 className="font-bold">Camila Flores</h2>
            <p className="">⭐⭐⭐⭐⭐</p>
            <p className="">Hace unos dias tuve la dicha de llevar a mis peluditos bellos a la mejor pelu canina. Llegue recomendada por una amiga. El cariño, dedicacion y profesionalismo que le entregaron a mis amores fue maravillo. Quedaron hermosoos. Gracias por la atencion brindada.</p>
          </div>
          <div className="p-4 border-2 border-grayDarker rounded-lg">
            <h2 className="font-bold">Nicole Alejandra</h2>
            <p className="">⭐⭐⭐⭐⭐</p>
            <p className="">Recomiendo 100% esta peluquería, mi Bolt es muy miedoso sin embargo aquí intentaron todo para que tuviera una experiencia que no lo traumara, se nota que ponen amor en su trabajo, además son personas muy amables !!! Mi Bolti quedo precioso 💜 gracias!!! 😊</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Opiniones;
