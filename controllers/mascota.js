require("../connection");
const Mascota = require("../models/Mascota");

const ctl = {
  agregarMascota: async (id, tipo, nombre, propietario) => {
    const mascota = new Mascota({
      id,
      tipo,
      nombre,
      propietario,
    });

    const mascotaSave = await mascota.save();
    return mascotaSave;
  },
  listarMascotas: async () => {
    const mascotas = await Mascota.find();
    return mascotas;
  },
  encontrarUnoPorId: async (id) => {
    const mascota = await Mascota.findOne({ id: id });
    return mascota;
  },
};

module.exports = ctl;
