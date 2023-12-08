import React from 'react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import MyFooter from './Footer';
import ListaDeServicios from './ListaDeServicios';
import NuestrosTrabajos from './NuestrosTrabajos';

function HomePage() {
  return (
    <div>
      <h2>Página de Inicio</h2>
      <p>Bienvenido a PetFashion, tu peluquería canina de confianza.</p>
      <AboutPage />
      <ListaDeServicios />
      <NuestrosTrabajos />
      <ContactPage />
      <MyFooter />
    </div>
  );
}

export default HomePage;
