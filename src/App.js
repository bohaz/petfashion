import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Servicios from './pages/Servicios';
import HomePage from './pages/HomePage';
import About2 from './pages/About';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import SwipeableTextMobileStepper from './pages/Trabajos';
import CorteYBano from './components/CorteYBano';
import SoloBano from './components/SoloBano';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ImportantMessagePopup from './components/ImportantMessagePopup';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner';
import BarraDeNavegacion from './components/BarraDeNavegacion';

function App() {
  return (
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
        <Route path="/about" element={<About2 />} />

        <Route path="/servicios" element={<Servicios />} />
        <Route path="/trabajos" element={<SwipeableTextMobileStepper />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/CorteYBano" element={<CorteYBano />} />
        <Route path="/SoloBano" element={<SoloBano />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
