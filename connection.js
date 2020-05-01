const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/veterinaria";

// Conecting database
async function db() {
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((e) => {
      console.log("Conecto!!!");
    })
    .catch((e) => {
      console.log("Error >>> ", e);
    });
}
db();

// message db is connect
mongoose.connection.on("open", (_) => {
  console.log("DB connected in ", uri);
});

console.log("Esto deberia estar despues");
