import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import background from '../assets/GroomingTools2.webp';

function Instagram() {
  return (
    <Box sx={{
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.6,
        zIndex: -1,
      },
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pb: '12%',
      pt: '12%',
    }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: -1,
        }}
      />
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{
          color: 'white',
          fontWeight: '700',
          fontFamily: 'Poppins, sans-serif',
          fontSize: { xs: 'h5.fontSize', sm: 'h3.fontSize' },
        }}
      >
        PetFashion está en Instagram
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', color: 'white', fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' } }}>
        Siguenos
        {' '}
        <Link
          href="https://www.instagram.com/pet_fashion17?igsh=MWx3eHVvYThrdm9nMw=="
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          @pet_fashion17
        </Link>
      </Typography>
    </Box>
  );
}

export default Instagram;
