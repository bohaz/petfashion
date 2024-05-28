import React from 'react';
import { Box } from '@mui/material';
import ContactPage from './ContactPage';
import Visitanos from '../components/Visitanos';
import Instagram from '../components/Instagram';
import About from './About';
import Servicios from './Servicios';
import Opiniones from '../components/Opiniones';

function HomePage() {
  return (
    <Box>

      <About />
      <Servicios />
      <Instagram />
      <Opiniones />
      <Visitanos />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
