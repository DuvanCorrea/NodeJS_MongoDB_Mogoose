require("../connection");
const Mascota = require("../models/Mascota");

const ctl = {
  listarMascotas: async () => {
    const mascotas = await Mascota.find();
    return mascotas;
  },
};

module.exports = ctl;
