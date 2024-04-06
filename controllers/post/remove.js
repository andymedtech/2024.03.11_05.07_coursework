const post = require("../../models/post.model");
// Удалить post
module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const postData = await post.deleteOne({
      _id: id,
    });
    res.json(postData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
