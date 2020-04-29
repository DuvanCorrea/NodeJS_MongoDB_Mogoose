const { Schema, model } = require("mongoose");

const mascotaSchema = new Schema({
  id: Number,
  tipo: String,
  nombre: String,
  propietario: String,
});

module.exports = model("Mascota", mascotaSchema);
