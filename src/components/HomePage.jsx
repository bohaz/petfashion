import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ListaDeServicios from './ListaDeServicios';
import Trabajos from './Trabajos';

function HomePage() {
  return (
    <Box>
            <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ color: '#dd8ea4', fontWeight: '700', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' } }}>
      Pet fashion - Peluquería canina
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 4 }}>
      Especialistas en estética canina
      </Typography>

      <AboutPage />
      <ListaDeServicios />
      <Trabajos />
      <ContactPage />
    </Box>
  );
}

export default HomePage;
