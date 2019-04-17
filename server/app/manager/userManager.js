const { User } = require("../models/");
const bcrypt = require("bcrypt");
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
