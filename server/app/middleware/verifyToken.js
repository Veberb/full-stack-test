const jwt = require("jsonwebtoken");
const config = require("../../config");

function verifyToken(req, res, next) {
  const token = req.headers["mytapp-token"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res.status(401).send({
        auth: false,
        message: "Problemas na autenticação do seu token."
      });
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
