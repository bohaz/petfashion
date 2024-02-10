import React from 'react';
import { toast } from 'react-toastify';

function Logout() {
  const handleLogout = () => {
    // Remover el token de localStorage
    localStorage.removeItem('token');
    toast.info('¡Sesión cerrada exitosamente!');
    console.log('Sesión cerrada exitosamente');
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Logout;
