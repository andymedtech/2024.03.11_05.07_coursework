const comment = require("../../models/comment.model");
// Получить все comment по ID post
module.exports = async (req, res) => {
  try {
    const { post_id } = req.params;
    const commentData = await comment.find({
      post_id,
    });
    res.json(commentData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
