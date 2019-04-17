const express = require("express");
const userManager = require("../manager/userManager");

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
    console.log(error.errors);
    next(JSON.stringify(error.errors[0]));
  }
});
