const like = require("../../models/like.model");
// Получить все like по ID post
module.exports = async (req, res) => {
  try {
    const { post_id } = req.params;
    const likeData = await like.find({
      post_id,
    });
    res.json(likeData.length);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
