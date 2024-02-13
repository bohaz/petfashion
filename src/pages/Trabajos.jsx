import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import TrustmaryWidget from '../components/TrustmaryWidget';

const images = [
  {
    imgPath: image1,
  },
  {
    imgPath: image2,
  },
  {
    imgPath: image3,
  },
  {
    imgPath: image4,
  },
  {
    imgPath: image5,
  },
  {
    imgPath: image6,
  },
  {
    imgPath: image7,
  },
  {
    imgPath: image8,
  },
  {
    imgPath: image9,
  },
];

function ImageGallery() {
  return (
    <Box sx={{ pb: '10%', pt: '5%', px: '5%' }}>
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
        Nuestros Clientes
      </Typography>
      <Box textAlign="center" sx={{ marginBottom: 2 }}>
        <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#dd8ea4' }} />
      </Box>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.imgPath}>
            {' '}

            <Box
              component="img"
              sx={{
                margin: 'auto',
                maxWidth: '100%',
                height: 'auto',
                borderRadius: 2,
              }}
              src={image.imgPath}
              alt={`Image ${image.imgPath}`}
            />
          </Grid>
        ))}
      </Grid>
      <TrustmaryWidget />
    </Box>
  );
}

export default ImageGallery;
