import React from 'react';
import { Box } from '@mui/material';
import ContactPage from './ContactPage';
/* import Trabajos from './Trabajos'; */
import Visitanos from '../components/Visitanos';
import TrustmaryWidget from '../components/TrustmaryWidget';
import Instagram from '../components/Instagram';
import About from './About';
import Servicios from './Servicios';

function HomePage() {
  return (
    <Box>

      <About />
      <Servicios />
      <Instagram />
      {/*  <Trabajos /> */}
      <TrustmaryWidget />
      <Visitanos />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
