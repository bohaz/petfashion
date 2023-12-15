import React from "react";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
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
    <Box sx={{ margin: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" textAlign="center" gutterBottom >
        Nuestros Servicios
      </Typography>
      <FontAwesomeIcon icon={faShieldDog} style={{ fontSize: '50px' }} />
      
      <Paper elevation={3} sx={{ width: '90%', mt: 3 }}>

        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Servicio</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Peso</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Precio</TableCell>
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
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default ListaDeServicios;
