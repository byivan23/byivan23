import React from 'react';
import logo from './img/diego.png'; // Ajusta la ruta según el nombre real
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo Barbería" className="navbar-logo" />
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Agendar</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/ubicacion">Ubicación</Link></li>
        <li><Link to="/login">Administrador</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;