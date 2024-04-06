const like = require("../../models/like.model");
// Удалить like post
module.exports = async (req, res) => {
  try {
    const { user_id, post_id } = req.body;
    const likeData = await like.deleteOne({
      user_id,
      post_id,
    });
    res.json(likeData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
