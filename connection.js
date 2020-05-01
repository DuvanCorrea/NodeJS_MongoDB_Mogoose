const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/veterinaria";

(async () => {
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((e) => {
      console.log("Error >>> ", e);
    });
})();

// message db is connect
mongoose.connection.on("open", (_) => {
  console.log("DB connected in ", uri);
});

console.log("Esto deberia estar despues de conectarse");
