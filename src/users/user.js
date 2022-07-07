const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    // selected: false,
  },
  avatar: {
    type: String,
    require: true,
  },
});
const user = mongoose.model("user", UserSchema);

module.exports = user;
