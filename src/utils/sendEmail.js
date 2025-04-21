import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const serviceId = 'service_pryz19b';
const templateId = 'template_ta1tj2g';
const userId = 'x9kDizl6AGXIURnZS';

const sendEmail = (data, onSuccess) => {
  const emailParams = {
    user_name: data.ownerName,
    pet_name: data.petName,
    user_email: data.email,
    phone: data.phone,
    message: 'Gracias por reservar en nuestra peluquería canina. Estas son nuestras condiciones...',
  };

  emailjs.send(serviceId, templateId, emailParams, userId)
    .then(() => {
      toast.success('Reserva realizada con éxito. Revisa tu correo 📩', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: false,
      });

      onSuccess();
    })
    .catch((error) => {
      console.error('Error al enviar correo:', error);
      toast.error('Error al enviar la reserva. Inténtalo de nuevo ❌', {
        position: 'top-center',
        autoClose: 5000,
      });
    });
};

export default sendEmail;
