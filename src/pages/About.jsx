import React from 'react';
import HuellaCorazon from '../assets/HuellaCorazon.png';
import HuellaCruz from '../assets/HuellaCruz.png';
import MedallaHuella from '../assets/MedallaHuella.png';

function About() {
  return (
    <div className="p-4 flex flex-col gap-5">
      <h1 className="font-bold text-2xl text-center">Quiénes Somos</h1>
      <div className="flex flex-col items-center">
        <img className="w-52" src={MedallaHuella} alt="Huella" />
        <p className="bg-amber-200 p-3 rounded-lg shadow-lg shadow-neutral-400 text-center">
          Somos una empresa familiar dedicada a prestar el servicio
          de peluquería canina que tu mascota necesita.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-52" src={HuellaCruz} alt="Huella" />
        <p className="bg-amber-200 p-3 rounded-lg shadow-lg shadow-neutral-400 text-center">
          Nuestro equipo está conformado por un médico veterinario y una excelente
          estilista canina trabajando para usted.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-52" src={HuellaCorazon} alt="Huella" />
        <p className="bg-amber-200 p-3 rounded-lg shadow-lg shadow-neutral-400 text-center">
          No usamos bozal ni sedación. La idea principal es que tu mascota
          se sienta cómoda y segura.
        </p>
      </div>
    </div>
  );
}

export default About;
