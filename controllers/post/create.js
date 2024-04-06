const post = require("../../models/post.model");
// Создать post
module.exports = async (req, res) => {
  try {
    const { user_id, content } = req.body;
    const postDate = new Date();
    const postData = await post.create({
      user_id,
      content,
      timestamp: postDate,
      timechange: postDate,
    });
    res.json(postData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
