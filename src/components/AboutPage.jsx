import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; 
import logo1 from '../assets/huella.png';
import logo2 from '../assets/mascota.png';
import logo3 from '../assets/perro.png';
import VideoButton from './VideoButton';

function AboutPage() {
  const textos = [
    "Somos una empresa familiar dedicada a prestar el servicio de peluquería canina que tu mascota necesita.",
    "Nuestro equipo está conformado por un médico veterinario y una excelente estilista canina trabajando para usted.",
    "No usamos bozal ni sedación. La idea principal es que tu mascota se sienta cómoda y segura."
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f2e9e3', pt: '5%', pb: '10%' }}>
      <motion.div
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ color: '#31383f', fontWeight: '700', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' } }}>
          Quiénes Somos
        </Typography>
        <Box textAlign="center" sx={{ mb: '4%' }}>
          <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#dd8ea4' }} />
        </Box>
        
      </motion.div>

      <Grid container spacing={3} justifyContent="center" >
        {[logo1, logo2, logo3].map((logo, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Box textAlign="center">
              <img src={logo} alt={`Logo ${index + 1}`} style={{ maxWidth: '150px', margin: '0 auto' }} />
                <Paper elevation={3} sx={{ mt: 2, padding: 2, height: '100px', backgroundColor: '#fedd89', maxWidth: '80%', margin: '0 auto' }}>
                  <Typography variant="body1">
                    {textos[index]}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <VideoButton videoId="6EK9DO9iZmw" />
    </Box>
  );
}

export default AboutPage;