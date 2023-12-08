import React from "react";
import Servicio from "./Servicio";

function ListaDeServicios() {
  const servicios = [
    { nombre: "Baño Completo", descripcion: "Baño y secado completo.", precio: 10000 },
    { nombre: "Corte de Pelo", descripcion: "Corte según raza y preferencia del cliente.", precio: 15000 },
    { nombre: "Limpieza Dental", descripcion: "Limpieza completa y revisión dental.", precio: 8000 },
  ];

  return (
    <div>
      {servicios.map((servicio, index) => (
        <Servicio key={index} nombre={servicio.nombre} descripcion={servicio.descripcion} precio={servicio.precio} />
      ))}
    </div>
  );
}

export default ListaDeServicios;
