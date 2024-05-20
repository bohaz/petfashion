import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'; */
import image1 from '../assets/workImages/1.png';
import image5 from '../assets/workImages/5.png';
import image6 from '../assets/workImages/6.png';
import image7 from '../assets/workImages/7.png';
import image8 from '../assets/workImages/8.png';
import image9 from '../assets/workImages/9.png';

const images = [
  {
    imgPath: image1,
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
    <Box sx={{ pb: '1%', pt: '1%' }}>
      {/* <Typography
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
      </Typography> */}
      {/* <Box textAlign="center" sx={{ marginBottom: 2 }}>
        <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#dd8ea4' }} />
      </Box> */}
      <Grid container spacing={1}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={2} key={image.imgPath}>
            {' '}

            <Box
              component="img"
              sx={{

                maxWidth: '100%',
                height: 'auto',

              }}
              src={image.imgPath}
              alt={`Image ${image.imgPath}`}
            />
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}

export default ImageGallery;
