const userService = require("./users.service");

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!email || !name || !password || !avatar || !username) {
    return res.status(400).send({
      message:
        "por favor verificar todos os campos: 'username', or 'name' or 'email' or 'password' or 'avatar' ",
    });
  }
  const foundUser = await userService.findByEmailUserService(email);
  if (foundUser) {
    return res.status(400).send({ message: "Usuario ja existi!!!" });
  }
  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err,  message ));
  if (!user) {
    return res.status(400).send({
      message: "Erro ao criar o usuario",
    });
  }
  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  const user = await userService.findAllUserService();
  if (user.length === 0) {
    return res
      .status(404)
      .send({ message: "Não existi usuario cadastrado!!!" });
  }
  res.send(user);
};

module.exports = { createUserController, findAllUserController };
