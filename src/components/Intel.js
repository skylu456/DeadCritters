import React from 'react';
import './Intel.css';

function Intel() {
  return (
    <div className="intel-container">
      <h1>Intel - Reportes</h1>
      <p>Bienvenido a Intel. ¡Esta es la función que permite ver reportes acerca de los datos encuestados!</p>
      <iframe 
        width="250" 
        height="800" 
        src="https://lookerstudio.google.com/embed/reporting/25735e81-a9a7-4dbe-a429-123791de7d65/page/IPN5D" 
        frameBorder="0" 
        style={{ border: 0 }} 
        allowFullScreen 
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
      </iframe>
    </div>
  );
}

export default Intel;
