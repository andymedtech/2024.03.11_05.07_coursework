const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  user_id_from: Schema.Types.String,
  user_id_to: Schema.Types.String,
  content: Schema.Types.String,
  timestamp: Schema.Types.Date,
});

const messageModel = model("messages", messageSchema);

module.exports = messageModel;
