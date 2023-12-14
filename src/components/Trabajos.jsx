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
    label: '',
    imgPath: image5,
  },
  {
    label: 'Goč, Serbia',
    imgPath: image6,
  },
  {
    label: 'Goč, Serbia',
    imgPath: image7,
  },
  {
    label: 'Goč, Serbia',
    imgPath: image8,
  },
  {
    label: 'Goč, Serbia',
    imgPath: image9,
  },
  {
    label: 'Goč, Serbia',
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
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography>{image.label}</Typography>
            </Paper>
            <Box
              component="img"
              sx={{
                height: 350,
                display: 'block',
                maxWidth: 400,
                overflow: 'hidden',
                width: '100%',
              }}
              src={image.imgPath}
              alt={image.label}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default SwipeableTextMobileStepper;