import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

function MobileMenu({ open, onClose }) {
  const buttonStyle = {
    width: '100%',
    justifyContent: 'center',
    margin: '10px 0',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  };

  const dividerStyle = {
    width: '80%',
    margin: '10px 0',
    backgroundColor: '#dd8ea4',
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
        }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >

        <Button
          startIcon={<CloseIcon />}
          onClick={onClose}
          sx={{
            alignSelf: 'flex-end', marginRight: '-7px', marginTop: '-10px', color: '#dd8ea4',
          }}
        />

        <Button color="inherit" component={Link} to="/" sx={buttonStyle}>Home</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/about" sx={buttonStyle}>Quiénes Somos</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/servicios" sx={buttonStyle}>Servicios</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/trabajos" sx={buttonStyle}>Nuestros Clientes</Button>
        <Divider variant="middle" sx={dividerStyle} />
        <Button color="inherit" component={Link} to="/contact" sx={buttonStyle}>Contáctanos</Button>
      </Box>
    </Drawer>
  );
}

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
