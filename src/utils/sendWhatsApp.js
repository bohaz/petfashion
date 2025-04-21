const sendWhatsAppMessage = (data) => {
  const whatsappNumber = '56945570410';
  const message = `Hola *${data.ownerName}*,\n\n`
    + 'Gracias por agendar tu cita en *Pet Fashion - Peluquería Canina* \n\n'
    + `*Propietario:* ${data.ownerName}\n`
    + `*Mascota:* ${data.petName}\n`
    + `*Servicio:* ${data.service}\n`
    + `*Fecha deseada:* ${data.preferredDate || 'No indicada'}\n`
    + `*Tamaño del perrito:* ${data.petSize || 'No indicado'}\n`
    + `*Teléfono:* ${data.phone}\n`
    + `*Correo:* ${data.email || 'No proporcionado'}\n\n`
    + 'Nos pondremos en contacto contigo a la brevedad. ¡Gracias por preferirnos!';

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, '_blank');
};

export default sendWhatsAppMessage;
