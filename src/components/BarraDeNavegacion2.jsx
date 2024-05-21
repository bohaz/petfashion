import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/PfLogo2.png';
import Menu from '../assets/svg icons/menu.svg';
import MobileMenu from './MobileMenu';
import UserIcon from './UserIcon';

function BarraDeNavegacion2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="p-2 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <img className="w-24 lg:w-32" src={Logo} alt="Logo" />
          </li>
          <li className="hidden md:block">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden md:block">
            <Link to="/about">Acerca</Link>
          </li>
          <li className="hidden md:block">
            <Link to="/servicio">Servicio</Link>
          </li>
          <li className="hidden md:block">
            <Link to="/contact">Contáctanos</Link>
          </li>
          <li className="ml-60">
            <IconButton
              sx={{
                color: '#dd8ea4', pt: '0',
              }}
            >
              <UserIcon />
            </IconButton>
          </li>
          <li className="block md:hidden">
            <button type="button" onClick={handleMobileMenuOpen}><img className="w-10" src={Menu} alt="Menu" /></button>
          </li>
        </ul>
      </nav>
      <MobileMenu open={mobileMenuOpen} onClose={handleMobileMenuClose} />
    </div>
  );
}

export default BarraDeNavegacion2;
