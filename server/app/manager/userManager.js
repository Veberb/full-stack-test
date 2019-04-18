const { User } = require("../models/");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.create = async ({ name, email, password }) => {
  const hash = await bcrypt.hash(password, saltRounds);
  const { dataValues: user } = await User.create({
    name,
    email,
    password: hash
  });
  return user;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  const confirmedPassword = await bcrypt.compare(password, user.password);
  if (!confirmedPassword) throw new Error("Invalid Password");
  return user;
};
