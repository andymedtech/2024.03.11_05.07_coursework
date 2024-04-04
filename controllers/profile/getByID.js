const profile = require("../../models/profile.model");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const profileData = await profile.findOne({
      _id: id,
    });
    res.json(profileData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
