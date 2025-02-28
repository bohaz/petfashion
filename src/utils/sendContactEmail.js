import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const serviceId = 'service_pryz19b';
const templateId = 'template_49d5zro';
const userId = 'x9kDizl6AGXIURnZS';

const sendContactEmail = (data, onSuccess) => {
  const emailParams = {
    user_name: data.user_name,
    user_email: data.user_email,
    user_message: data.user_message, // Incluimos el mensaje del usuario
  };

  emailjs.send(serviceId, templateId, emailParams, userId)
    .then(() => {
      toast.success('Mensaje enviado con éxito. Nos pondremos en contacto pronto 📩', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      onSuccess();
    })
    .catch((error) => {
      console.error('Error al enviar el mensaje:', error);
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo ❌', {
        position: 'top-center',
        autoClose: 3000,
      });
    });
};

export default sendContactEmail;
