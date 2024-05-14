import React from 'react';
import { Box } from '@mui/material';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ListaDeServicios from './ListaDeServicios';
import Trabajos from './Trabajos';
import Visitanos from '../components/Visitanos';
import TrustmaryWidget from '../components/TrustmaryWidget';
import Instagram from '../components/Instagram';
import Visit from '../components/Visit';

function HomePage() {
  return (
    <Box>

      <AboutPage />
      <ListaDeServicios />
      <Instagram />
      <Trabajos />
      <TrustmaryWidget />
      <Visitanos />
      <Visit />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
