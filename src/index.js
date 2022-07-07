require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conectedDatabase = require("./database/database");
const userRouter = require("./users/users.route");
const authRouter = require("./auth/auth.route");

const port = process.env.PORT || 3001;
const app = express();

conectedDatabase();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
