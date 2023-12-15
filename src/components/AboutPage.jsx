import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../assets/huella.png';
import logo2 from '../assets/mascota.png';
import logo3 from '../assets/perro.png';

function AboutPage() {
  const textos = [
    "Somos una empresa familiar dedicada a prestar el servicio de peluquería canina que tu mascota necesita.",
    "Nuestro equipo está conformado por un médico veterinario y una excelente estilista canina trabajando para usted.",
    "No usamos bozal ni sedación. La idea principal es que tu mascota se sienta cómoda y segura."
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f2e9e3', pt: '5%', pb: '10%' }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ color: '#dd8ea4', fontWeight: '700', fontFamily: 'Poppins, sans-serif', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' } }}>
        Quienes somos
      </Typography>
      <Box textAlign="center" sx= {{mb: '4%'}} >
        <FontAwesomeIcon icon={faPaw} style={{ fontSize:  '50px', color: '#31383f' }} />
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {[logo1, logo2, logo3].map((logo, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box textAlign="center">
              <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '100%', maxWidth: '150px' }} />
              <Paper elevation={3} sx={{ mt: 2, padding: 2, height: '100px', backgroundColor: '#fedd89' }}>
                <Typography variant="body1">
                {textos[index]}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutPage;
