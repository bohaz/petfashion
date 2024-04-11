import React from 'react';
import { Box } from '@mui/material';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ListaDeServicios from './ListaDeServicios';
import Trabajos from './Trabajos';
import Visitanos from '../components/Visitanos';

function HomePage() {
  return (
    <Box>

      <AboutPage />
      <ListaDeServicios />
      <Trabajos />
      <Visitanos />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
