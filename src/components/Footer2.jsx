import React from 'react';
import {
  Box, Typography, IconButton, Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Box sx={{
      backgroundColor: '#333',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}
    >
      <Box sx={{
        display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center',
      }}
      >
        <Typography variant="body1" sx={{ mr: 2 }}>
          Encuentranos en
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2, height: '35px', bgcolor: 'white' }} />
        <IconButton color="inherit" href="https://www.instagram.com/pet_fashion17?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" href="https://www.facebook.com/tuPerfilDeFacebook/" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://maps.app.goo.gl/RP3MHQ3pyWAoQ2Qq6" target="_blank">
          <PlaceIcon />
        </IconButton>
        
      </Box>
      <Typography variant="body2">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Pet Fashion - Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;