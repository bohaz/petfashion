import React from "react";
import { Card, CardContent, Typography } from '@mui/material';

function Servicio({ nombre, descripcion, precio }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="body2">
          Precio: ${precio}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Servicio;
