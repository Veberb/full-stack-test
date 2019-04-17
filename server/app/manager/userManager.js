const { User } = require("../models/");

exports.create = async ({ name, email, password }) => {
  const { dataValues: user } = await User.create({
    name,
    email,
    password
  });
  return user;
};
