const express = require("express");
const VerifyToken = require("../middleware/verifyToken");
const beerManager = require("../manager/beerManager");

const router = express.Router({
  mergeParams: true
});

module.exports = app => {
  app.use("/api/beers", router);
};
// VerifyToken
router.get("/", VerifyToken, async (req, res, next) => {
  try {
    const beers = await beerManager.list(req.query);
    return res.json(beers);
  } catch (error) {
    next(error);
  }
});
