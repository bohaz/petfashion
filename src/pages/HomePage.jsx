import React from 'react';
import { Box } from '@mui/material';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ListaDeServicios from './ListaDeServicios';
import Trabajos from './Trabajos';


function HomePage() {
  return (
    <Box>

      <AboutPage />
      <ListaDeServicios />
      <Trabajos />
      
      <ContactPage />
      
    </Box>
  );
}

export default HomePage;
