require("./connection");
const Mascota = require("./models/Mascota");

// Create pet but its not saved
const mascota = new Mascota({
  id: 1,
  nombre: "firu",
  tipo: "perro",
  propietario: "Duvan",
});

// save pet in database
mascota.save((err, document) => {
  if (err) {
    console.log("Error >>> ", err);
  }
  console.log(document);
});

console.log(mascota);
