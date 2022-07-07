const user = require("./user");

const findByEmailUserService = (email) => user.findOne({ email: email });

const createUserService = (body) => user.create(body);

const findAllUserService = () => user.find();

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
};
