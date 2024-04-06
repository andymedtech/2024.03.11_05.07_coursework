const profile = require("../../models/profile.model");
// Изменить profile
module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const profileData = await profile.findOneAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    res.json(profileData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
