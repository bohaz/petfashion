import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'; // Importa Divider para las líneas

function MobileMenu({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ 
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0'
        }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <Button color="inherit" component={Link} to="/" sx={buttonStyle}>Home</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/about" sx={buttonStyle}>Quiénes Somos</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/servicios" sx={buttonStyle}>Servicios</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/trabajos" sx={buttonStyle}>Nuestros Trabajos</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/contact" sx={buttonStyle}>Contáctanos</Button>
      </Box>
    </Drawer>
  );
}

// Estilos adicionales
const buttonStyle = {
  width: '100%',
  justifyContent: 'center',
  margin: '10px 0',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)', // Cambia el color al pasar el mouse
  }
};

const dividerStyle = {
  width: '80%', // Ancho de la línea divisora
  margin: '10px 0'
};

export default MobileMenu;
