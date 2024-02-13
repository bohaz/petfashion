import React from 'react';
import {
  Grid, Paper, Typography, Box,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import logo1 from '../assets/huella.png';
import logo2 from '../assets/mascota.png';
import logo3 from '../assets/perro.png';
import VideoButton from '../components/VideoButton';

function AboutPage() {
  // Actualizando la estructura de datos para incluir un id o clave única
  const items = [
    {
      id: 'huella', // Identificador único
      logo: logo1,
      texto: 'Somos una empresa familiar dedicada a prestar el servicio de peluquería canina que tu mascota necesita.',
    },
    {
      id: 'mascota', // Identificador único
      logo: logo2,
      texto: 'Nuestro equipo está conformado por un médico veterinario y una excelente estilista canina trabajando para usted.',
    },
    {
      id: 'perro', // Identificador único
      logo: logo3,
      texto: 'No usamos bozal ni sedación. La idea principal es que tu mascota se sienta cómoda y segura.',
    },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.2 },
  };

  return (
    <Box sx={{
      padding: 2, backgroundColor: '#f2e9e3', pt: '5%', pb: '10%',
    }}
    >
      <motion.div
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            color: '#31383f', fontWeight: '700', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' },
          }}
        >
          Quiénes Somos
        </Typography>
        <Box textAlign="center" sx={{ mb: '4%' }}>
          <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#dd8ea4' }} />
        </Box>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * items.indexOf(item) }}
            >
              <Box textAlign="center">
                <img src={item.logo} alt={`Logo ${item.id}`} style={{ maxWidth: '150px', margin: '0 auto' }} />
                <Paper
                  elevation={3}
                  sx={{
                    mt: 2, padding: 2, height: 'auto', backgroundColor: '#fedd89', maxWidth: '80%', margin: '0 auto',
                  }}
                >
                  <Typography variant="body1">
                    {item.texto}
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
