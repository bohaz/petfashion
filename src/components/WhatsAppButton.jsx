import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppButton() {
  const whatsappNumber = '+56945570410';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const iconStyle = {
    color: 'green',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    fontSize: '60px',
    zIndex: '1000',
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje de WhatsApp" style={iconStyle}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}

export default WhatsAppButton;
