const express = require("express");
const VerifyToken = require("../middleware/verifyToken");

const router = express.Router({
  mergeParams: true
});

module.exports = app => {
  app.use("/api/beers", router);
};

router.get("/", VerifyToken, async (req, res, next) => {
  try {
    console.log("valido");
    // const user = await userManager.create(req.body);
    res.json("user");
  } catch (error) {
    console.log("invalido");
    console.log(error);
    next(JSON.stringify(error));
  }
});
