import React from "react";
import ListaDeServicios from "./components/ListaDeServicios";
import SearchAppBar from "./components/BarraDeNavegacion";


function App() {
  return (
    <div>
      <SearchAppBar />
      <h1>Catálogo de Servicios de Peluquería Canina</h1>
      <ListaDeServicios />
    </div>
  );
}

export default App;