import React from 'react';
import Card1 from '../assets/Icono5.png';
import Card2 from '../assets/Icono6.png';
import Card3 from '../assets/Icono7.png';
import Card4 from '../assets/Icono8.png';

function Cards() {
  return (
    <div className="flex flex-row gap-5 overflow-hidden items-center mt-10">
      <a href="http://localhost:3000/">
        <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400">
          <img className="w-52" src={Card4} alt="icono" />
          <h2 className="text-center text-gray-800">Antes de Agendar</h2>
        </div>
      </a>
      <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400">
        <img className="w-52" src={Card1} alt="icono" />
        <h2 className="text-center text-gray-800">Corte y Baño</h2>
      </div>
      <div className="bg-amber-200 rounded-xl p-4 border-4 border-amber-400">
        <img className="w-52" src={Card2} alt="icono" />
        <h2 className="text-center text-gray-800">Corte de Uñas</h2>
      </div>
      <div className="bg-amber-200 rounded-xl  p-4 border-4 border-amber-400">
        <img className="w-52" src={Card3} alt="icono" />
        <h2 className="text-center text-gray-800">Corte de Pelo</h2>
      </div>
    </div>

  );
}

export default Cards;
