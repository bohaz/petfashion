import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollTrigger } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MobileMenu from './MobileMenu';
import Typography from '@mui/material/Typography';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: 'white',
      ...(trigger ? {
        width: '70%', 
        mt: '1%',
        borderRadius: '30px',
        transition: '0.3s',
        transform: 'translateX(-21.5%)', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      } : {
        height: '64px', 
        borderRadius: '0px', 
      })
    },
  });
}

export default function SearchAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const linkStyle = {
    
      color: '#dd8ea4',
      fontWeight: '700',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
   
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
       <ElevationScroll>
      <AppBar position="fixed" sx={{ backgroundColor: 'white !important' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: '#dd8ea4' }}
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' }, color: '#dd8ea4',fontWeight: '700',
              fontFamily: 'Poppins, sans-serif', }}
            >
              Pet Fashion
            </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            
            <Button sx={ linkStyle } component={Link} to="/">Home</Button>
            <Button sx={ linkStyle } component={Link} to="/about">Quiénes Somos</Button>
            <Button sx={ linkStyle } component={Link} to="/servicios">Servicios</Button>
            <Button sx={ linkStyle } component={Link} to="/trabajos">Nuestros Trabajos</Button>
            <Button sx={ linkStyle } component={Link} to="/contact">Contáctanos</Button>

          </Box>

        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <MobileMenu open={mobileMenuOpen} onClose={handleMobileMenuClose} />
    </Box>
  );
}