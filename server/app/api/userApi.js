const express = require("express");
const userManager = require("../manager/userManager");
const config = require("../../config");
const jwt = require("jsonwebtoken");
const Boom = require("boom");

const router = express.Router({
  mergeParams: true
});

module.exports = app => {
  app.use("/api/users", router);
};

router.post("/", async (req, res, next) => {
  try {
    const user = await userManager.create(req.body);
    res.json("user");
  } catch (error) {
    next(JSON.stringify(error.errors[0]));
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await userManager.login(req.body);

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400
    });
    res.status(200).send({ auth: true, token: token });
  } catch (error) {
    next(error);
  }
});
