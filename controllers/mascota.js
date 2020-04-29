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
    await mascota.save((err, document) => {
      if (err) {
        console.log("Error >>> ", err);
      }
      return document;
    });
  },
  listarMascotas: async () => {
    const mascotas = Mascota.find();
    return mascotas;
  },
};

module.exports = ctl;
