import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaDeServicios from "./pages/ListaDeServicios";
import SearchAppBar from "./components/BarraDeNavegacion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
import Banner from "./components/Banner";
import SwipeableTextMobileStepper from "./pages/Trabajos";
import Footer from "./components/Footer2";
import ImportantMessagePopup from "./components/ImportantMessagePopup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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