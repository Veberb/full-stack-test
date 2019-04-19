const { User } = require("../models/");
const bcrypt = require("bcrypt");
const Boom = require("boom");
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
  if (!email) throw Boom.badData("É preciso informar o email");
  if (!password) throw Boom.badData("É preciso informar a s enha");

  const user = await User.findOne({ where: { email } });

  if (!user) throw Boom.badRequest("Usuário não encontrado");

  const confirmedPassword = await bcrypt.compare(password, user.password);
  if (!confirmedPassword) throw Boom.badRequest("Senha inválida");
  return user;
};
