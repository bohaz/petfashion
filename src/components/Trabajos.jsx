import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import ReviewsComponent from './ReviewsComponent';

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

function SwipeableTextMobileStepper() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box sx={{ pb: '10%', pt: '5%', p: '5%' }}>
       <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            color: '#31383f',
            fontWeight: '700',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' }
          }}
        >
        Nuestros Trabajos
      </Typography>
      <Box textAlign="center" sx={{ marginBottom: 2 }}>
      <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#dd8ea4'}} />
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
                  marginBottom: 2,
                  padding: 1,
                  maxWidth: '50%',
                  borderRadius: '30px',
                  backgroundColor: '#fedd89',
                  color: '#31383f',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{image.label}</Typography>
              </Paper>
            )}
            <Box
              component="img"
              sx={{
                margin: 'auto',
                maxWidth: { xs: '320px', md: '500px' },
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
      <ReviewsComponent />
    </Box>
  );
}

export default SwipeableTextMobileStepper;