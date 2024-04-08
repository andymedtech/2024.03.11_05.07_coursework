const comment = require("../../models/comment.model");
// Изменить comment
module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const commentData = await comment.findOneAndUpdate(
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
    res.json(commentData);
  } catch (e) {
    console.log(e);
    res.json("ERROR controllers/comment/update.js");
  }
};
