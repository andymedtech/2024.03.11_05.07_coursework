const profile = require("../../models/profile.model");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const profileData = await profile.deleteOne({
      _id: id,
    });
    res.json(profileData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
