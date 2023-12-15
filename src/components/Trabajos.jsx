import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import image10 from '../assets/10.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    label: 'Brutal',
    imgPath: image3,
  },
  {
    label: 'Augusta',
    imgPath: image4,
  },
  {
    label: 'Niña',
    imgPath: image5,
  },
  {
    label: 'Pensi',
    imgPath: image6,
  },
  {
    label: 'Loki',
    imgPath: image7,
  },
  {
    label: 'Milo',
    imgPath: image8,
  },
  {
    label: 'Maya',
    imgPath: image9,
  },
  {
    label: 'Moa',
    imgPath: image10,
  },
];

function SwipeableTextMobileStepper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box sx={{ padding: 2, maxWidth: { xs: '350px', md: '500px' }, margin: 'auto', pb: 4 }}>
       <Typography variant="h4" gutterBottom textAlign="center" >
        Nuestros Trabajos
      </Typography>
      <Box textAlign="center" sx={{ marginBottom: 2 }}>
        <FontAwesomeIcon icon={faShieldDog} style={{ fontSize: '50px' }} />
      </Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            {image.label && (
              <Paper
                square
                elevation={3}
                sx={{
                  margin: 'auto',
                  marginBottom: 1,
                  padding: 1,
                  maxWidth: 'fit-content',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{image.label}</Typography>
              </Paper>
            )}
            <Box
              component="img"
              sx={{
                height: 'auto',
                width: '100%',
                borderRadius: 2,
              }}
              src={image.imgPath}
              alt={image.label}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SwipeableTextMobileStepper;