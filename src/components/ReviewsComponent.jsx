import React, { useEffect } from 'react';

const ReviewsComponent = () => {
    useEffect(() => {
        // Crear el script de Reviews on My Website
        const script = document.createElement('script');
        script.src = "https://reviewsonmywebsite.com/js/v2/embed.js?id=7bf8acda5d5930b1a9db343a4ec1b31c";
        script.type = 'text/javascript';
        script.async = true;

        // Añadir el script al body
        document.body.appendChild(script);

        return () => {
            // Eliminar el script cuando el componente se desmonte
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div data-romw-token="bzHcAhdEOgeAdMACuBKEpt1UYekttt4lP5czN67FchjKumeXKt"></div>
    );
};

export default ReviewsComponent;
