import React from 'react';
import {
  Box, Typography, TextField, Button, Grid,
} from '@mui/material';
import contactImage from '../assets/contact.jpg';
import ContsctaImage2 from '../assets/Icono4.png';

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
        backgroundColor: '#FDF3EA',
        padding: 2,

        minHeight: '100vh',
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
                color: '#2E2F35',
                fontWeight: '700',

                fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' },
              }}
            >
              Contáctanos
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <img className="w-32 md:w-44 m-auto" src={ContsctaImage2} alt="Contact" />
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
                      border: '2px solid #2E2F35',
                      backgroundColor: '#FF6D2C',
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
