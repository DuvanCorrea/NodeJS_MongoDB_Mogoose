const { Schema, model } = require("mongoose");

const miMascotaSchema = new Schema({
  id: Number,
  tipo: String,
  nombre: String,
  propietario: String,
});

module.exports = model("Mascota", miMascotaSchema);
