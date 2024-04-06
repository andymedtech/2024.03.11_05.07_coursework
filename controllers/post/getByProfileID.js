const post = require("../../models/post.model");
// Получить все post по ID profile
module.exports = async (req, res) => {
  try {
    const { user_id } = req.params;
    const postData = await post.find({
      user_id: user_id,
    });
    res.json(postData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
