const path = require("path");

module.exports = {
  path: path.normalize(`${__dirname}/..`),
  secret: "lucas:)",
  punk: {
    endpoint: "https://api.punkapi.com/v2/beers"
  }
};
