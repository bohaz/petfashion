import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import contactImage from '../assets/contact.jpg';
import ContsctaImage2 from '../assets/Icono10.png';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: '30%', md: '7rem' },
        pb: { xs: '30%', md: '7rem' },
        backgroundColor: '#FDF3EA',
        paddingX: 1,
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
              <img className="w-20 md:w-28 m-auto" src={ContsctaImage2} alt="Contact" />
            </Box>

            <ContactForm />
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
      {/* 🔹 Sección de Google Maps */}
      <Box
        sx={{
          width: '92%',
          maxWidth: '1200px',
          height: '400px',
          mt: 4,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <iframe
          title="Ubicación Pet Fashion"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.350296029345!2d-71.68051632500888!3d-33.44017909698497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966217447100a41f%3A0xc0fb58232a4b816c!2sPet%20fashion%20-%20Peluquer%C3%ADa%20canina!5e0!3m2!1ses!2scl!4v1740741394148!5m2!1ses!2scl"

        />
      </Box>
    </Box>
  );
}

export default Contact;
