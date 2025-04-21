/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
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
    <Box
      sx={{
        maxHeight: '90vh',
        overflowY: 'auto',
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        Reserva tu cita
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Tu nombre completo"
          fullWidth
          margin="normal"
          {...register('ownerName', { required: true })}
        />
        <TextField
          label="Nombre de tu perrito(a)"
          fullWidth
          margin="normal"
          {...register('petName', { required: true })}
        />
        <TextField
          label="Número de WhatsApp"
          type="tel"
          fullWidth
          margin="normal"
          {...register('phone', { required: true })}
        />
        <TextField
          label="Correo electrónico"
          type="email"
          fullWidth
          margin="normal"
          {...register('email')}
        />
        <TextField
          select
          label="¿Qué servicio necesita?"
          fullWidth
          margin="normal"
          defaultValue=""
          {...register('service', { required: true })}
        >
          <MenuItem value="">Selecciona un servicio</MenuItem>
          <MenuItem value="Baño">Baño</MenuItem>
          <MenuItem value="Corte y Baño">Corte y Baño</MenuItem>
          <MenuItem value="Corte de uñas">Corte de uñas</MenuItem>
          <MenuItem value="Otro">Otro</MenuItem>
        </TextField>
        <TextField
          label="¿Cuándo te gustaría agendar?"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          {...register('preferredDate')}
        />
        <TextField
          select
          label="Tamaño aproximado de tu mascota"
          fullWidth
          margin="normal"
          defaultValue=""
          {...register('petSize')}
        >
          <MenuItem value="">Selecciona un tamaño</MenuItem>
          <MenuItem value="Pequeño">Pequeño (hasta 7 kg)</MenuItem>
          <MenuItem value="Mediano">Mediano (8-15 kg)</MenuItem>
          <MenuItem value="Grande">Grande (más de 15 kg)</MenuItem>
        </TextField>

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
    </Box>
  );
}

BookingForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BookingForm;
