const comment = require("../../models/comment.model");
// Создать comment
module.exports = async (req, res) => {
  try {
    const { user_id, post_id, content } = req.body;
    const commentDate = new Date();
    const commentData = await comment.create({
      user_id,
      post_id,
      content,
      timestamp: commentDate,
      timechange: commentDate,
    });
    res.json(commentData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
