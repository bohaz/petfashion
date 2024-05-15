import React from 'react';
import { Box } from '@mui/material';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ListaDeServicios from './ListaDeServicios';
import Trabajos from './Trabajos';
import Visitanos from '../components/Visitanos';
import TrustmaryWidget from '../components/TrustmaryWidget';
import Instagram from '../components/Instagram';
import About from './About';

function HomePage() {
  return (
    <Box>

      <AboutPage />
      <About />
      <ListaDeServicios />
      <Instagram />
      <Trabajos />
      <TrustmaryWidget />
      <Visitanos />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
