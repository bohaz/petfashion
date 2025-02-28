/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button } from '@mui/material';
import sendContactEmail from '../utils/sendContactEmail';

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    sendContactEmail(data, () => {
      reset(); // Limpiar formulario después del envío exitoso
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nombre Completo"
            {...register('user_name', { required: true })}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Correo"
            type="email"
            {...register('user_email', { required: true })}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Escribe Algo..."
            multiline
            rows={4}
            {...register('user_message', { required: true })}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '100%',
              padding: '10px',
              borderRadius: '30px',
              fontWeight: 'bold',
              border: '2px solid #2E2F35',
              backgroundColor: '#FF6D2C',
              '&:hover': {
                backgroundColor: 'white',
                color: '#dd8ea4',
              },
            }}
          >
            Enviar mensaje
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
