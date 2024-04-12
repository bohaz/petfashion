import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../assets/PfLogo2.png';
import BookingButton from './BookingButton';

function Banner() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.9, delay: 0.5 },
  };
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'white',
      padding: '5% 0',
      '@media (max-width:600px)': {
        marginTop: '35px',
      },
      textAlign: 'center',
    }}
    >
      <motion.div
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <img src={logo} alt="Logo de la empresa" style={{ height: '250px', margin: '0 auto' }} />
      </motion.div>
      <BookingButton />

      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          color: '#dd8ea4', fontWeight: '700', fontFamily: 'Poppins, sans-serif', mt: '20px', fontSize: { xs: 'h5.fontSize', sm: 'h3.fontSize' },
        }}
      >
        Pet fashion - Peluquería canina
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' } }}>
        Especialistas en estética canina
      </Typography>
    </Box>
  );
}

export default Banner;
