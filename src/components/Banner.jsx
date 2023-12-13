import React from 'react';
import Box from '@mui/material/Box';
import logo from '../assets/Logo.png'; // Asegúrate de actualizar la ruta al logo

function Banner() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'white', // Ajusta el color de fondo según tu tema
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 0', // Ajusta el padding según tus necesidades
    }}>
      <img src={logo} alt="Logo de la empresa" style={{ height: '250px' }} /> {/* Ajusta el tamaño según tus necesidades */}
    </Box>
  );
}

export default Banner;
