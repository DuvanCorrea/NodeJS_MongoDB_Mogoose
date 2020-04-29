const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/veterinaria";

// Conecting database
const db = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log("Error >>> ", e);
  });

// message if db is connect
mongoose.connection.on("open", (_) => {
  console.log("DB connected in ", uri);
});
