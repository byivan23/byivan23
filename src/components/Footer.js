import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>Horario: 11:30 am - 8:30 pm</span>
      </div>
      <div>
        {/* Cambia los links por los de tus redes sociales */}
        <a href="https://www.facebook.com/share/19TtoJc3o1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.instagram.com/diegoxx6666?igsh=cG0xZWtiYTQyNmw0" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div>
        <span>© 2024 DIEGO BARBER | Tu mejor look empieza aquí</span>
        <div>
        <span>Si estás interesado en un proyecto web, como DIEGO BARBER contacta a Diego Tapia en sus redes sociales</span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
