const like = require("../../models/like.model");

module.exports = async (req, res) => {
  try {
    const { user_id, post_id } = req.body;
    const likeFound = await like.findOne({
      user_id,
      post_id,
    });
    if (!likeFound) {
      const likeData = await like.create({
        user_id,
        post_id,
        timestamp: new Date(),
      });
      res.json(likeData);
    } else {
      res.json("Already available");
    }
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
