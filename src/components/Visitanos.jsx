import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import background from '../assets/GroomingTools.webp';
import BookingButton from './BookingButton';

function Visitanos() {
  return (
    <Box sx={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pb: '10%',
      pt: '10%',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.6,
        zIndex: -1,
      },

    }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: -1,
        }}
      />
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{
          color: 'white',
          fontWeight: '700',
          fontFamily: 'Poppins, sans-serif',
          fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' },
        }}
      >
        Visítanos
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', color: 'white', fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' } }}>
        Lunes - Sábado: 9:00 - 18:00
        <br />
        Domingo: Cerrado
        <br />
        Estamos ubicados en la calle Santa Luisa #51, Isla Negra.
      </Typography>
      <BookingButton />
    </Box>
  );
}

export default Visitanos;
