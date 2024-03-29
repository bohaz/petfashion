import React from 'react';
import {
  Box, Typography, TextField, Button, Grid,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../assets/contact.jpg';

function Contact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: '10%', md: '8%' },
        pb: '10%',
        backgroundColor: '#f2e9e3',
      }}
    >
      <Grid container spacing={2} sx={{ width: { xs: '95%', md: '70%' }, display: 'flex', alignItems: 'stretch' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '2rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '15px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              textAlign="center"
              sx={{
                color: '#31383f',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' },
              }}
            >
              Contáctanos
            </Typography>
            <Box textAlign="center" sx={{ marginBottom: 2 }}>
              <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#dd8ea4' }} />
            </Box>
            <form action="https://formspree.io/f/xyyaoqnq" method="POST">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Nombre Completo" name="user_name" required variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Correo" name="user_email" type="email" required variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Escribe Algo..." name="user_message" multiline rows={4} variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '30px',
                      fontWeight: 'bold',
                      backgroundColor: '#dd8ea4',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: '#dd8ea4',
                      },
                    }}
                  >
                    Enviar mensaje
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={contactImage}
            alt="Imagen descriptiva"
            sx={{
              width: '100%',
              borderRadius: '15px',
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
