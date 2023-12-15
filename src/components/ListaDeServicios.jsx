import React from "react";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/background.jpg';
import Paper from '@mui/material/Paper';

function ListaDeServicios() {

  const servicios = [
    {
      tipo: "Baño Completo",
      detalles: [
        { peso: "Hasta 10kg", precio: 15000 },
        { peso: "10-20kg", precio: 20000 },
      ],
    },
    {
      tipo: "Corte de Pelo",
      detalles: [
        { peso: "Hasta 10kg", precio: 20000 },
        { peso: "10-20kg", precio: 25000 },
      ],
    },
    {
      tipo: "Corte de Uñas",
      detalles: [
        { precio: 5000 },
      ],
    },
  ];
  
 return (
  <Box sx={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pb: '5%',
    pt: '5%'
  }}>
      <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            color: '#31383f',
            fontWeight: '700',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
        Nuestros Servicios
      </Typography>
      <FontAwesomeIcon icon={faPaw} style={{ fontSize: '50px', color: '#31383f' }} />

      <Paper elevation={3} sx={{ width: '90%', mt: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#dd8ea4' }}>
            <TableRow>
              <TableCell sx={{ color: '#31383f', fontWeight: 'bold' }}>Servicio</TableCell>
              <TableCell sx={{ color: '#31383f', fontWeight: 'bold' }}>Peso</TableCell>
              <TableCell sx={{ color: '#31383f', fontWeight: 'bold' }}>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicios.map((servicio, index) => (
              servicio.detalles.map((detalle, detalleIndex) => (
                <TableRow key={`${index}-${detalleIndex}`} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{detalleIndex === 0 ? servicio.tipo : ''}</TableCell>
                  <TableCell>{detalle.peso || 'Todos los pesos'}</TableCell>
                  <TableCell>${detalle.precio}</TableCell>
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
    </Box>
  );
}

export default ListaDeServicios;
