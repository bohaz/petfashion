import React from 'react';
import Box from '@mui/material/Box';
import logo from '../assets/Logo.png';

function Banner() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5% 0',
    }}>
      <img src={logo} alt="Logo de la empresa" style={{ height: '250px' }} />
    </Box>
  );
}

export default Banner;
