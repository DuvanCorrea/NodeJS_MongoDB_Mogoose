require("./connection");
const ctlMascota = require("./controllers/mascota");

async () => {
  const prueba = await ctlMascota.agregarMascota(
    2,
    "iris",
    "conejo",
    "Fernanda"
  );
  console.log(prueba);
};
