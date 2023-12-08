import React from "react";

function Servicio({ nombre, descripcion, precio }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default Servicio;