/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import BookingForm from './BookingForm';

// Estilos para el modal
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

function BookingButton({ sx = {}, color = 'success' }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color={color}
        startIcon={<FontAwesomeIcon icon={faWhatsapp} />}
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: sx.backgroundColor || '#FF6D2C',
          color: sx.color || '#FFFFFF',
          border: sx.border || '2px solid #2E2F35',
          textTransform: 'none',
          borderRadius: '30px',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: sx.hoverBackgroundColor || '#E65C24' },
          ...sx, // Permite sobrescribir cualquier estilo desde las props
        }}
      >
        Agenda Ahora
      </Button>

      {/* Modal con el formulario */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <BookingForm onClose={() => setOpen(false)} />
        </Box>
      </Modal>
    </>
  );
}

export default BookingButton;
