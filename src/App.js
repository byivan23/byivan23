import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AdminCitas from './components/AdminCitas';
import LoginAdmin from './components/LoginAdmin'; // 👈 nuevo import
import Productos from './components/Productos';
import Servicios from './components/Servicios';
import Ubicacion from './components/Ubicacion';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/login" element={<LoginAdmin />} /> {/* 👈 nueva ruta */}
        <Route path="/admin" element={<AdminCitas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;