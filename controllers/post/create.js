const post = require("../../models/post.model");

module.exports = async (req, res) => {
  try {
    const { user_id, content } = req.body;
    const postData = await post.create({
      user_id,
      content,
      timestamp: new Date(),
    });
    res.json(postData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
