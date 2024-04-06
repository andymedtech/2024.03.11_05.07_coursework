const profile = require("../../models/profile.model");
// Получить все profile
module.exports = async (req, res) => {
  try {
    const profileList = await profile.find();
    res.json(profileList);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
