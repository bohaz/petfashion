import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { useScrollTrigger } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import MobileMenu from './MobileMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
            sx={{ mr: 2, color: 'black' }}
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/">Home</Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/about">Quiénes Somos</Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/servicios">Servicios</Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/trabajos">Nuestros Trabajos</Button>
            <Button color="inherit" sx={{ color: 'black' }} component={Link} to="/contact">Contáctanos</Button>

          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'black' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'black' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <MobileMenu open={mobileMenuOpen} onClose={handleMobileMenuClose} />
    </Box>
  );
}