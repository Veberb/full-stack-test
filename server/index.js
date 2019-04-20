const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const glob = require("glob");
const cors = require("cors");
const Boom = require("boom");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));

app.use(cors("*"));
const apis = glob.sync(`${config.path}/**/*Api.js`);
apis.forEach(apiPath => {
  require(`${apiPath}`)(app);
});
app.use((err, req, res, next) => {
  const error = Boom.isBoom(err) ? err : Boom.boomify(err);

  res
    .status(error.output.statusCode)
    .json({ message: error.message, error: error.output.payload.error });
});
app.listen(3000);
