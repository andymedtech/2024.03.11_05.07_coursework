const profile = require("../../models/profile.model");

module.exports = async (req, res) => {
  try {
    const { name, surname, email, login, password, avatar } = req.body;
    const profileData = await profile.create({
      name,
      surname,
      email,
      login,
      password,
      avatar,
    });
    res.json(profileData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
