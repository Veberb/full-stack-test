const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const glob = require("glob");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

console.log(config);
// Load APIs
const apis = glob.sync(`${config.path}/**/*Api.js`);
apis.forEach(apiPath => {
  console.log(apiPath);
  require(`${apiPath}`)(app);
});

app.listen(3000);
