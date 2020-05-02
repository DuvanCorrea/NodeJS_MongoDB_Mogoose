require("./connection");
const Mascota = require("./models/Mascota");
const ctlMascotas = require("./controllers/mascota");

ctlMascotas
  .listarMascotas()
  .then((mascotas) => console.log("Mascotas :D >>> ", mascotas))
  .catch((err) => console.log("error >>> ", err));
