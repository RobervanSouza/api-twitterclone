const mongoose = require("mongoose");
const conectedDatabase = () => {
  console.log("conectado com o banco de dados...");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb conectado..."))
    .catch((err) => console.log(`erro ao conectar com o banco de dados ${err}`));
};
module.exports = conectedDatabase;
