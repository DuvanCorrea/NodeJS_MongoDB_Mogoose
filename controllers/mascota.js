const Mascota = require("../models/Mascota");

const ctl = {
  agregarMascota: async (id, nombre, tipo, propietario) => {
    // Create pet but its not saved
    const mascota = new Mascota({
      id,
      nombre,
      tipo,
      propietario,
    });

    // save pet in database
    await mascota.save();
  },
  listarMascotas: async () => {
    const mascotas = await Mascota.find();
    return mascotas;
  },
};

module.exports = ctl;
