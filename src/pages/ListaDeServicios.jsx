import React from 'react';
import {
  Typography, Table, TableBody, TableCell, TableHead, TableRow, Box,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from '../assets/background1.jpg';

function ListaDeServicios() {
  const servicios = [
    {
      tipo: 'Baño cosmético (Incluye: Deslanado, Vaciado glándulas anales, limpieza de oídos y corte de uñas)',
      detalles: [
        { peso: 'Hasta 10 Kg.', precio: 15000 },
        { peso: '10-20 Kg.', precio: 20000 },
      ],
    },
    {
      tipo: 'Corte y Baño (Incluye: Vaciado glándulas anales, limpieza de oídos y corte de uñas)',
      detalles: [
        { peso: 'Hasta 10 Kg.', precio: 20000 },
        { peso: '10-20 Kg.', precio: 25000 },
      ],
    },
    {
      tipo: 'Corte de Uñas',
      detalles: [
        { precio: 5000 },
      ],
    },
  ];

  const openWhatsApp = () => {
    const whatsappNumber = '+56945570410';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const formatearPrecio = (precio) => precio.toLocaleString('es-CL');

  return (
    <Box sx={{
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',

        zIndex: -1,
      },
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pb: '10%',
      pt: '5%',
    }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{
          color: 'white',
          fontWeight: '700',
          fontFamily: 'Poppins, sans-serif',
          fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' },
        }}
      >
        Nuestros Servicios
      </Typography>
      <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: 'white' }} />

      <Paper elevation={3} sx={{ width: '90%', mt: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#dd8ea4' }}>
            <TableRow>
              <TableCell sx={{ color: '#31383f', fontWeight: 'bold' }}>Servicio</TableCell>
              <TableCell sx={{ color: '#31383f', fontWeight: 'bold' }}>Peso Mascota</TableCell>
              <TableCell sx={{ color: '#31383f', fontWeight: 'bold' }}>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicios.map((servicio) => (
              servicio.detalles.map((detalle) => (
                <TableRow key={`${servicio.tipo}-${detalle.precio}-${detalle.peso || 'todos'}`} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{servicio.tipo}</TableCell>
                  <TableCell>{detalle.peso || 'Todos los pesos'}</TableCell>
                  <TableCell>
                    CLP
                    {formatearPrecio(detalle.precio)}
                  </TableCell>
                </TableRow>
              ))
            ))}

            <TableRow>
              <TableCell colSpan={3} sx={{ textAlign: 'center', fontStyle: 'italic', backgroundColor: '#e0e0e0' }}>
                Los valores varían de acuerdo a la condición del pelaje de la mascota
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: '700', mb: 2 }}>
          ¿Tienes dudas? No dudes en escribirnos
        </Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<FontAwesomeIcon icon={faWhatsapp} />}
          onClick={openWhatsApp}
          sx={{
            textTransform: 'none', borderRadius: '30px', fontWeight: 'bold', '&:hover': { backgroundColor: '#4caf50' },
          }}
        >
          Contáctanos por WhatsApp
        </Button>
      </Box>
    </Box>
  );
}

export default ListaDeServicios;
