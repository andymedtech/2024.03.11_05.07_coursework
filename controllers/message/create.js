const message = require("../../models/message.model");
// Создать message
module.exports = async (req, res) => {
  try {
    const { user_id_from, user_id_to, content } = req.body;
    const messageData = await message.create({
      user_id_from,
      user_id_to,
      content,
      timestamp: new Date(),
    });
    res.json(messageData);
  } catch (e) {
    console.log(e);
    res.json("ERROR controllers/message/create.js");
  }
};
