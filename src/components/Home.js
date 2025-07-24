import React, { useState } from 'react';
import Modal from 'react-modal';
import './Home.css';

Modal.setAppElement('#root');

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    tipoCorte: '',
    fecha: '',
    hora: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-barberr.onrender.com/api/citas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMensaje('¡Cita agendada exitosamente!');
        setForm({
          nombre: '',
          telefono: '',
          tipoCorte: '',
          fecha: '',
          hora: ''
        });
        setTimeout(() => {
          setModalOpen(false);
          setMensaje('');
        }, 1800);
      } else {
        setMensaje('Error al agendar la cita');
      }
    } catch (error) {
      setMensaje('Error de conexión con el servidor');
    }
  };

  return (
    <main className="home">
      <section className="slogan">
        <h1>Tu mejor look empieza aquí con tu buen amigo DIEGO T</h1>
        <p>Agenda tu cita y luce increíble</p>
      </section>

      <section id="agendar" className="card">
        <h2>Agendar cita</h2>
        <p>Adulto: $100 - $90 | Niño: $80</p>
        <button onClick={() => setModalOpen(true)}>Reservar ahora</button>
      </section>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="modal-cita"
        overlayClassName="modal-overlay"
      >
        <h2>Agendar cita</h2>
        <form onSubmit={handleSubmit} className="form-cita">
          <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleInput} required />
          <input type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleInput} required />
          <select name="tipoCorte" value={form.tipoCorte} onChange={handleInput} required>
            <option value="">Tipo de corte</option>
            <option value="Adulto">Adulto - $100</option>
            <option value="Niño">Niño - $80</option>
          </select>
          <input type="date" name="fecha" value={form.fecha} onChange={handleInput} required />
          <input type="time" name="hora" value={form.hora} onChange={handleInput} min="11:30" max="20:30" required />

          <button type="submit" className="btn-reservar">Agendar</button>
          <button type="button" className="btn-cancelar" onClick={() => setModalOpen(false)}>Cancelar</button>
        </form>

        {mensaje && <div className="msg-exito">{mensaje}</div>}
      </Modal>
    </main>
  );
}

export default Home;