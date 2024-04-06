const message = require("../../models/message.model");
// Получить диалог через PUT
module.exports = async (req, res) => {
  try {
    const { user_id_from, user_id_to } = req.body;
    const messageData = await message.find({
      $or: [{ user_id_from }, { user_id_from: user_id_to }],
      $or: [{ user_id_to: user_id_from }, { user_id_to }],
    });
    res.json(messageData);
  } catch (e) {
    console.log(e);
    res.json("ERROR");
  }
};
