/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BookingForm({ onClose }) {
  const { register, handleSubmit, reset } = useForm();

  const serviceId = 'service_5ba4aea';
  const templateId = 'template_vau954s';
  const userId = 'VEdUEvObsOGRosT3B';

  const onSubmit = (data) => {
    const emailParams = {
      user_name: data.ownerName,
      pet_name: data.petName,
      user_email: data.email,
      phone: data.phone,
      message: 'Gracias por reservar en nuestra peluquería canina. Estas son nuestras condiciones...',
    };

    emailjs.send(serviceId, templateId, emailParams, userId)
      .then(() => {
        toast.success('Reserva realizada con éxito. Revisa tu correo 📩', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        reset();
        onClose();
      })
      .catch((error) => {
        console.error('Error al enviar correo:', error);
        toast.error('Error al enviar la reserva. Inténtalo de nuevo ❌', {
          position: 'top-center',
          autoClose: 3000,
        });
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
