const profile = require("../../models/profile.model");
const bcrypt = require("bcrypt"); // authorization hash password
// Создать profile
module.exports = async (req, res) => {
  try {
    const { name, surname, email, login, password, avatar } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 1); // authorization hash password

    const profileData = await profile.create({
      name,
      surname,
      email,
      login,
      password: hashedPassword,
      avatar,
    });
    res.json(profileData);
  } catch (e) {
    console.log(e);
    res.json("ERROR controllers/profile/create.js");
  }
};
