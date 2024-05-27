import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function BookingButton() {
  const openWhatsApp = () => {
    const whatsappNumber = '+56945570410';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<FontAwesomeIcon icon={faWhatsapp} />}
      onClick={openWhatsApp}
      sx={{
        backgroundColor: '#FF6D2C', border: '2px solid #2E2F35', textTransform: 'none', borderRadius: '30px', fontWeight: 'bold', '&:hover': { backgroundColor: '#E65C24' },
      }}
    >
      Agenda Ahora
    </Button>
  );
}

export default BookingButton;
