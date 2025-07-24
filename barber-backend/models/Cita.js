const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  tipoCorte: String,
  fecha: String,
  hora: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cita', citaSchema);