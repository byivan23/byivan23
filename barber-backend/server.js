const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Cita = require('./models/Cita');

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://barber-diego.onrender.com'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error conectando MongoDB:', err));

// Ruta para crear una cita
app.post('/api/citas', async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    await nuevaCita.save();
    res.status(201).json(nuevaCita);
  } catch (err) {
    res.status(400).json({ error: 'No se pudo crear la cita' });
  }
});

// Ruta para ver todas las citas (solo admin debería acceder en frontend)
app.get('/api/citas', async (req, res) => {
  try {
    const citas = await Cita.find().sort({ fecha: 1, hora: 1 });
    res.json(citas);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron obtener las citas' });
  }
});

// Ruta de login de administrador
app.post('/api/login', (req, res) => {
    const { usuario, contrasena } = req.body;
  
    const ADMIN_USER = process.env.ADMIN_USER || 'admin';
    const ADMIN_PASS = process.env.ADMIN_PASS || '1234';
  
    if (usuario === ADMIN_USER && contrasena === ADMIN_PASS) {
      res.json({ acceso: true });
    } else {
      res.status(401).json({ acceso: false });
    }
  });

// Ruta para eliminar una cita
app.delete('/api/citas/:id', async (req, res) => {
    try {
      await Cita.findByIdAndDelete(req.params.id);
      res.json({ mensaje: 'Cita eliminada correctamente' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar la cita' });
    }
  });  
  
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});