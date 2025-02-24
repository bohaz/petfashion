const sendWhatsAppMessage = (data) => {
  const whatsappNumber = '56945570410';
  const message = '📅 *Nueva Reserva Pet Fashion* 📅\n\n'
                  + `👤 *Propietario:* ${data.ownerName}\n`
                  + `🐶 *Mascota:* ${data.petName}\n`
                  + `📧 *Correo:* ${data.email}\n`
                  + `📞 *Teléfono:* ${data.phone}\n\n`
                  + '💬 Por favor, continúa la conversación con el cliente.';

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, '_blank');
};

export default sendWhatsAppMessage;
