const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/veterinaria";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log("error >>> ", e);
  });

mongoose.connection.once("open", () => {
  console.log("DB is connect >>> ", uri);
});
