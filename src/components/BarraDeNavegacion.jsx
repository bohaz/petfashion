import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Menu from '../assets/svg icons/menu.svg';
import MobileMenu from './MobileMenu';
import BookingButton from './BookingButton';

function BarraDeNavegacion() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-2 lg:px-20 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <img className="w-24 lg:w-28" src={Logo} alt="Logo" />
          </li>
          <div className="flex gap-4 items-center">
            <li className="hidden md:block text-grayDarker text-2xl">
              <button
                type="button"
                onClick={() => handleLinkClick('/')}
              >
                Inicio
              </button>
            </li>
            <li className="hidden md:block text-grayDarker text-2xl">
              <button
                type="button"
                onClick={() => handleLinkClick('/about')}
              >
                Sobre Nosotros
              </button>
            </li>
            <li className="hidden md:block text-grayDarker text-2xl">
              <button
                type="button"
                onClick={() => handleLinkClick('/servicios')}
              >
                Servicios
              </button>
            </li>
            <li className="hidden md:block text-grayDarker">
              <button
                type="button"
                onClick={() => handleLinkClick('/contact')}
                className="text-grayDarker text-2xl"
              >
                Contacto
              </button>
            </li>
            <li className="mt-1">
              <BookingButton />
            </li>
            <li className="block md:hidden">
              <button type="button" onClick={handleMobileMenuOpen}><img className="w-10" src={Menu} alt="Menu" /></button>
            </li>
          </div>
        </ul>
      </nav>
      <MobileMenu open={mobileMenuOpen} onClose={handleMobileMenuClose} />
    </div>
  );
}

export default BarraDeNavegacion;
