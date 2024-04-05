const post = require("../../models/post.model");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const postData = await post.findOne({
      _id: id,
    });
    res.json(postData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
