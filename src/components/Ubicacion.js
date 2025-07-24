import React from 'react';
import './Ubicacion.css';

const Ubicacion = () => {
  return (
    <div className="contenedor-ubicacion">
      <h1>📍 Ubicación de BARBER DIEGO</h1>
      <p>Encuéntranos en La Cabecera Concepción, Estado de México, listos para darte tu mejor look.</p>

      <div className="mapa">
        <iframe
          title="Ubicación Barbería Diego"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1878.0700417311916!2d-99.9440274078445!3d19.706659297509862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1753319582898!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Ubicacion;

