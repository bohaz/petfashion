import React from 'react';
import { Box } from '@mui/material';
import ContactPage from './ContactPage';
import Visitanos from '../components/Visitanos';
import Instagram from '../components/Instagram';
import Servicios from './Servicios';
import OpinionesFrame from '../components/opinionesFrame';
import AboutPreview from '../components/AboutPreview';
import CustomerSatisfactionStats from '../components/CustomerSatisfactionStats';

function HomePage() {
  return (
    <Box>

      <Servicios />
      <AboutPreview />
      <Instagram />
      <CustomerSatisfactionStats />
      <OpinionesFrame />
      <Visitanos />
      <ContactPage />

    </Box>
  );
}

export default HomePage;
