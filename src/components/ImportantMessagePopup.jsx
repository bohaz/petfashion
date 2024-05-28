import React, { useState, useEffect } from 'react';
import Quotes from '../assets/svg icons/quotes.svg';
import Simparica from '../assets/Simparica.png';
import Bravecto from '../assets/Bravecto.png';
import Nexgard from '../assets/Nexgard.webp';

function ImportantMessagePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
          <div className="bg-cream border-2 border-tealDark shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <div className="text-center text-tealDark font-bold text-2xl mb-4" style={{ fontFamily: 'Shadows Into Light, cursive' }}>
              ¡Importante!
            </div>
            <div className="relative p-6 md:text-lg rounded-xl text-center border-2 border-grayLight my-8">
              <img className="absolute -top-4 left-6 w-10 bg-orange-100" src={Quotes} alt="Quotes" />
              <p className="italic text-grayDark">
                Recuerda mantener a tu mascota libre de pulgas, así nos ayudas a cuidar
                a otros perritos que vienen a la pelu. ¡Actualiza su comprimido o pipeta!
              </p>
            </div>
            <div className="flex mb-5 justify-center">
              <img className="w-20 md:w-32" src={Simparica} alt="Simparica" />
              <img className="w-20 md:w-32" src={Bravecto} alt="Bravecto" />
              <img className="w-20 md:w-32" src={Nexgard} alt="Nexgard" />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleClose}
                className="bg-white text-grayDarker font-bold py-2 px-4 rounded-3xl border-2 border-grayDarker hover:outline hover:outline-grayDarker outline-offset-4  focus:outline-none focus:ring-opacity-75"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImportantMessagePopup;
