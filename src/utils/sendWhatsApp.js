const sendWhatsAppMessage = (data) => {
  const whatsappNumber = '56945570410';
  const message = `Hola *${data.ownerName}*,\n\n`
                  + 'Estos son tus datos para agendar tu cita en *Pet Fashion*:\n\n'
                  + `*Propietario:* ${data.ownerName}\n`
                  + `*Mascota:* ${data.petName}\n`
                  + `*Correo:* ${data.email}\n`
                  + `*Teléfono:* ${data.phone}\n\n`
                  + 'Gracias por la información. En breve te atenderemos.';

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, '_blank');
};

export default sendWhatsAppMessage;
