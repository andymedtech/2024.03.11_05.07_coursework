const like = require("../../models/like.model");

module.exports = async (req, res) => {
  try {
    const { postID } = req.params;
    const likeData = await like.find({
      post_id: postID,
    });

    res.json(likeData.length);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
