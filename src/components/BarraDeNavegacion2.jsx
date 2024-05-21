import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/PfLogo2.png';
import Menu from '../assets/svg icons/menu.svg';

function BarraDeNavegacion2() {
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
          <li className="block md:hidden">
            <img className="w-12" src={Menu} alt="Menu" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BarraDeNavegacion2;
