import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import aboutImage from '../assets/casa-de-perro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Acerca de Nosotros
      </Typography>
      <Box textAlign="center">
        <FontAwesomeIcon icon={faShieldDog} style={{ fontSize: '50px' }} />
      </Box>
      <Grid container spacing={3} alignItems="center">
        <Grid item md={6} xs={12} order={{ xs: 2, md: 1 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="body1" gutterBottom>
              Somos una empresa familiar dedicada a prestar los servicios de peluquería canina que su mascota necesita. Nuestro equipo está conformado por un médico veterinario y una excelente estilista trabajando para usted.
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} order={{ xs: 1, md: 2 }}>
          <Box
            component="img"
            src={aboutImage}
            alt="Acerca de Nosotros"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;
