import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaDeServicios from "./components/ListaDeServicios";
import SearchAppBar from "./components/BarraDeNavegacion";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";


function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servicios" element={<ListaDeServicios />} />
      </Routes>
    </Router>
  );
}

export default App;