const jwt = require("jsonwebtoken"); // authorization token
const { SECRET_KEY } = require("../../config.json"); // secret_key
// middleware check authorization
module.exports = async (req, res, next) => {
  try {
    // console.log(req.headers.jwt);
    try {
      jwt.verify(req.headers.jwt, SECRET_KEY);
    } catch (e) {
      return res.status(401).json("this profile is not authorization");
    }
    next();
  } catch (e) {
    console.log(e);
    res.json("ERROR middlewares/auth/auth.middleware.js");
  }
};
