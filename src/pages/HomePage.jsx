import React from 'react';
import { Box } from '@mui/material';
import ContactPage from './ContactPage';
import Visitanos from '../components/Visitanos';
import Instagram from '../components/Instagram';
import About from './About';
import Servicios from './Servicios';
import OpinionesFrame from '../components/opinionesFrame';

function HomePage() {
  return (
    <Box>

      <Servicios />
      <About />
      <Instagram />
      <OpinionesFrame />
      <Visitanos />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
