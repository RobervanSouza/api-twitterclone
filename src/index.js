require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conectedDatabase = require("./database/database");

const port = process.env.PORT || 3001;
const app = express();

conectedDatabase();
app.use(cors());

app.listen(port, () =>{
console.log(`servidor rodando na porta ${port}`)
;});