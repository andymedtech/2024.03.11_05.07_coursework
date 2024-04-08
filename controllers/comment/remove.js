const comment = require("../../models/comment.model");
// Удалить comment
module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const commentData = await comment.deleteOne({
      _id: id,
    });
    res.json(commentData);
  } catch (e) {
    console.log(e);
    res.json("ERROR controllers/comment/remove.js");
  }
};
