import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ListaDeServicios from './ListaDeServicios';
import Trabajos from './Trabajos';

function HomePage() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom textAlign="center">
        Bienvenido a PetFashion
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Tu peluquería canina de confianza
      </Typography>

      <AboutPage />
      <ListaDeServicios />
      <Trabajos />
      <ContactPage />
    </Box>
  );
}

export default HomePage;
