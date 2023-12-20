import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import comment1 from '../assets/Comment1.png';
import comment2 from '../assets/Comment2.png';
import comment3 from '../assets/Comment3.png';
import comment4 from '../assets/Comment4.png';
import comment5 from '../assets/Comment5.png';
import comment6 from '../assets/Comment6.png';
import comment7 from '../assets/Comment7.png';

const StyledImage = styled('img')({
  borderRadius: '10px', 
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
  width: '100%', 
  objectFit: 'cover',
});


// Imágenes de comentarios
const commentImages = [
  {
    imgPath: comment1,
  },
  {
    imgPath: comment2,
  },
  {
    imgPath: comment3,
  },
  {
    imgPath: comment4,
  },
  {
    imgPath: comment5,
  },
  {
    imgPath: comment6,
  },
  {
    imgPath: comment7,
  },
];

function Opiniones() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <section className="opiniones">
       <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            mt: 3, 
            mb: 2, 
            color: '#31383f',
            fontWeight: '700',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: 'h6.fontSize', sm: 'h5.fontSize' }
          }}
        >
        Opiniones
      </Typography>

      {/* Siempre muestra las dos primeras imágenes */}
      <Grid container spacing={2}>
        {commentImages.slice(0, 2).map((commentImage, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <div className="opiniones__comment">
              <StyledImage src={commentImage.imgPath} alt={`Comentario ${index + 1}`} />
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Acordeón para el resto de las imágenes */}
      <Accordion 
        expanded={expanded} 
        onChange={(event, isExpanded) => handleChange(isExpanded)}
        sx={{
          mt: 2, 
          boxShadow: 'none', 
          '&:before': { display: 'none' }, 
          border: 'none' 
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography sx={{ color: '#31383f' }}>{expanded ? 'Ver menos' : 'Ver más'}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {commentImages.slice(2).map((commentImage, index) => (
              <Grid item xs={12} sm={6} key={index + 2}>
                <div className="opiniones__comment">
                  <StyledImage src={commentImage.imgPath} alt={`Comentario ${index + 3}`} />
                </div>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Opiniones;