import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaDeServicios from "./components/ListaDeServicios";
import SearchAppBar from "./components/BarraDeNavegacion";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
import Banner from "./components/Banner";
import SwipeableTextMobileStepper from "./components/Trabajos";
import Footer from "./components/Footer2";
import ImportantMessagePopup from "./components/ImportantMessagePopup";

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Banner />
      <ImportantMessagePopup />
      <WhatsAppButton />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
       
        <Route path="/servicios" element={<ListaDeServicios />} />
        <Route path="/trabajos" element={<SwipeableTextMobileStepper />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;