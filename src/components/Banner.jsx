import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../assets/Logo.png';

function Banner() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'white',
      padding: '5% 0',
      '@media (max-width:600px)': {
        marginTop: '20px',
      },
      textAlign: 'center',
    }}
    >
      <img src={logo} alt="Logo de la empresa" style={{ height: '250px', margin: '0 auto' }} />
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          color: '#dd8ea4', fontWeight: '700', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 'h5.fontSize', sm: 'h3.fontSize' },
        }}
      >
        Pet fashion - Peluquería canina
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' } }}>
        Especialistas en estética canina
      </Typography>
    </Box>
  );
}

export default Banner;
