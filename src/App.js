import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

import Servicios from './pages/Servicios';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import SwipeableTextMobileStepper from './pages/Trabajos';
import CorteYBano from './components/CorteYBano';
import SoloBano from './components/SoloBano';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ImportantMessagePopup from './components/ImportantMessagePopup';
import BarraDeNavegacion from './components/BarraDeNavegacion';
import Banner from './components/Banner';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <BarraDeNavegacion />
        <Banner />
        <ImportantMessagePopup />
        <WhatsAppButton />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/trabajos" element={<SwipeableTextMobileStepper />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/CorteYBano" element={<CorteYBano />} />
          <Route path="/SoloBano" element={<SoloBano />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
