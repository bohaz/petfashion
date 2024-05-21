import React from 'react';
import { Link } from 'react-router-dom';

function BarraDeNavegacion2() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/acerca">Acerca</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarraDeNavegacion2;
