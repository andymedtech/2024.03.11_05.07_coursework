const profile = require("../../models/profile.model");
// Получить короткую версию profile по ID
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const profileData = await profile
      .findOne({
        _id: id,
      })
      .select(["name", "email", "avatar"]);
    res.json(profileData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
