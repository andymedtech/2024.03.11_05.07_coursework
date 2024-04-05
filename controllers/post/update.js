const post = require("../../models/post.model");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const postData = await post.findOneAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
        timechange: new Date(),
      },
      {
        new: true,
      }
    );
    res.json(postData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
