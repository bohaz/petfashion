import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography, TextField, Button, Grid,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import contactImage from '../assets/contact.jpg';

function Contact({ id }) {
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: '10%', md: '8%' },
        pb: '5%',
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
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            color: '#dd8ea4',
            fontWeight: '700',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Contactanos
        </Typography>
        <Box textAlign="center" sx={{ marginBottom: 2 }} >
        <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#31383f' }} />
        </Box>
        <form action="https://formspree.io/f/xyyaoqnq" method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" name="user_name" required variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email Address" name="user_email" type="email" required variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Write something" name="user_message" multiline rows={4} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '20px',
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

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Contact;