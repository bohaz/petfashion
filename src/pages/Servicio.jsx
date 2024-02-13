import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography, Chip,
} from '@mui/material';

function Servicio({
  nombre, descripcion, precio, peso,
}) {
  return (
    <Card sx={{ marginBottom: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="body2">
          Precio: $
          {precio}
        </Typography>
        {peso && (
          <Chip label={`Peso: ${peso} kg`} color="primary" sx={{ mt: 1 }} />
        )}
      </CardContent>
    </Card>
  );
}

Servicio.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  peso: PropTypes.number,
};

Servicio.defaultProps = {
  peso: 0,
};

export default Servicio;
