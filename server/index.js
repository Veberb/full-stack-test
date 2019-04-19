const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const glob = require("glob");
var cors = require("cors");

const app = express();
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));

app.use(cors("*"));
const apis = glob.sync(`${config.path}/**/*Api.js`);
apis.forEach(apiPath => {
  require(`${apiPath}`)(app);
});

app.listen(3000);
