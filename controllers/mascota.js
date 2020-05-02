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
};

module.exports = ctl;
