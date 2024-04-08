const profile = require("../../models/profile.model");
const bcrypt = require("bcrypt"); // authorization hash password
const jwt = require("jsonwebtoken"); // authorization token
const { SECRET_KEY } = require("../../config.json"); // secret_key
// Авторизовать profile
module.exports = async (req, res) => {
  try {
    const { login, password } = req.body; // get data from frontend
    const foundProfile = await profile.findOne({ login }); // found profile in database
    if (!foundProfile) {
      return res.json("profile not found");
    }
    const validate = bcrypt.compareSync(password, foundProfile.password); // check password: true / false
    if (!validate) {
      return res.json("wrong password");
    }
    // maked new jwt token
    const newToken = jwt.sign(
      {
        name: foundProfile.name,
        surname: foundProfile.surname,
        login: foundProfile.login,
      },
      SECRET_KEY
    );
    res.json(newToken); // return token
  } catch (e) {
    // console.log(e);
    res.json("ERROR controllers/profile/auth.js");
  }
};
