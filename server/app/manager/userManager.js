const { User } = require("../models/");

exports.create = async ({ name, email, password }) => {
  console.log(name, email, password);
  return User.create({
    name,
    email,
    password
  });
};
