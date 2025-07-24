import React, { useEffect, useState } from 'react';
import './AdminCitas.css';
import { useNavigate } from 'react-router-dom';

const AdminCitas = () => {
  const [citas, setCitas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige si no ha iniciado sesión
    if (!localStorage.getItem('isAdmin')) {
      navigate('/login');
    } else {
      obtenerCitas();
    }
  }, [navigate]);

  const obtenerCitas = async () => {
    try {
      const res = await fetch('https://backend-barberr.onrender.com/api/citas');
      const data = await res.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  const eliminarCita = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar esta cita?');
    if (!confirmar) return;

    try {
      const res = await fetch(`https://backend-barberr.onrender.com/api/citas/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setCitas(citas.filter(cita => cita._id !== id));
      }
    } catch (error) {
      console.error('Error al eliminar la cita:', error);
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div className="admin-citas">
      <h2>📋 Panel de Citas Agendadas</h2>
      <button className="logout-btn" onClick={cerrarSesion}>Cerrar sesión</button>
      {citas.length === 0 ? (
        <p>No hay citas registradas</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Tipo de Corte</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {citas.map(cita => (
              <tr key={cita._id}>
                <td>{cita.nombre}</td>
                <td>{cita.telefono}</td>
                <td>{cita.tipoCorte}</td>
                <td>{cita.fecha}</td>
                <td>{cita.hora}</td>
                <td>
                  <button className="btn-eliminar" onClick={() => eliminarCita(cita._id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminCitas;