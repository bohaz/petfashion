import React from 'react';
import whatsappButton from '../assets/svg icons/whatsapp.svg';

function WhatsAppButton() {
  const whatsappNumber = '+56945570410';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const iconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    zIndex: '1000',
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje de WhatsApp">
      <img src={whatsappButton} alt="WhatsApp" style={iconStyle} />
    </a>
  );
}

export default WhatsAppButton;
