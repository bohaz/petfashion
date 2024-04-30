import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function BookingButton() {
  const openWhatsApp = () => {
    const whatsappNumber = '+56945570410';
    const message = encodeURIComponent('Hola, 😊 en que podemos servirte?');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<FontAwesomeIcon icon={faWhatsapp} />}
      onClick={openWhatsApp}
      sx={{
        textTransform: 'none', borderRadius: '30px', fontWeight: 'bold', '&:hover': { backgroundColor: '#4caf50' }, mt: '20px',
      }}
    >
      Agenda Ahora
    </Button>
  );
}

export default BookingButton;
