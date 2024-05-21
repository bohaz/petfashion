import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/PfLogo2.png';
import Menu from '../assets/svg icons/menu.svg';

function BarraDeNavegacion2() {
  return (
    <nav className="p-2">
      <ul className="flex items-center justify-between">
        <li>
          <img className="w-24" src={Logo} alt="Logo" />
        </li>
        <li className="hidden md:block">
          <Link to="/inicio">Inicio</Link>
        </li>
        <li className="hidden md:block">
          <Link to="/acerca">Acerca</Link>
        </li>
        <li className="hidden md:block">
          <Link to="/contacto">Contacto</Link>
        </li>
        <li className="block md:hidden">
          <img className="w-12" src={Menu} alt="Menu" />
        </li>
      </ul>
    </nav>
  );
}

export default BarraDeNavegacion2;
