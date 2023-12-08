import React from 'react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function HomePage() {
  return (
    <div>
      <h2>Página de Inicio</h2>
      <p>Bienvenido a PetFashion, tu peluquería canina de confianza.</p>
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default HomePage;
