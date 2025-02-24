/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sendEmail from '../utils/sendEmail';
import sendWhatsAppMessage from '../utils/sendWhatsApp';

function BookingForm({ onClose }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    sendEmail(data, () => {
      sendWhatsAppMessage(data);
      reset();
      onClose();
    });
  };

  return (
    <>
      <Typography variant="h6" component="h2" gutterBottom>
        Reserva tu cita
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nombre del propietario"
          fullWidth
          margin="normal"
          {...register('ownerName', { required: true })}
        />
        <TextField
          label="Nombre de la mascota"
          fullWidth
          margin="normal"
          {...register('petName', { required: true })}
        />
        <TextField
          label="Correo electrónico"
          type="email"
          fullWidth
          margin="normal"
          {...register('email', { required: true })}
        />
        <TextField
          label="Número de teléfono"
          type="tel"
          fullWidth
          margin="normal"
          {...register('phone', { required: true })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            backgroundColor: '#FF6D2C',
            border: '2px solid #2E2F35',
            textTransform: 'none',
            borderRadius: '30px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#E65C24' },
          }}
        >
          Enviar reserva
        </Button>
      </form>
    </>
  );
}

BookingForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BookingForm;
