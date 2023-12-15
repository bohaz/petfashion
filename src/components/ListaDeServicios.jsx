import React from "react";
import Servicio from "./Servicio";
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

function ListaDeServicios() {
  const servicios = [
    { nombre: "Baño Completo", descripcion: "Baño y secado completo.", precio: 10000 },
    { nombre: "Corte de Pelo", descripcion: "Corte según raza y preferencia del cliente.", precio: 15000 },
    { nombre: "Limpieza Dental", descripcion: "Limpieza completa y revisión dental.", precio: 8000 },
  ];

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h3" textAlign="center" gutterBottom>
        Nuestros Servicios
      </Typography>
      <Box textAlign="center">
        <FontAwesomeIcon icon={faShieldDog} style={{ fontSize: '50px' }} />
      </Box>

      <Grid container spacing={2}>
        {servicios.map((servicio, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Servicio
              nombre={servicio.nombre}
              descripcion={servicio.descripcion}
              precio={servicio.precio}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListaDeServicios;