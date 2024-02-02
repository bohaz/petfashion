import React, { useEffect } from 'react';

const TrustmaryWidget = () => {
  useEffect(() => {
    const scriptId = 'trustmary-widget-script';
    if (document.getElementById(scriptId)) return;
  
    setTimeout(() => {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://widget.trustmary.com/3Ss79-l0j";
      script.async = true;
     
      const container = document.getElementById("trustmary-widget-container");
      if (container) {
        container.appendChild(script);
      }
    }, 1000); // Retrasa la ejecución en 1 segundo
  
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  

  // Este div actúa como el contenedor para el widget
  return <div id="trustmary-widget-container"></div>;
};

export default TrustmaryWidget;
