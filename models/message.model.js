const { Schema, model } = require("mongoose");

const schema = new Schema({
  user_id_from: {
    type: Schema.Types.ObjectId,
    ref: "profiles",
  },
  user_id_to: {
    type: Schema.Types.ObjectId,
    ref: "profiles",
  },
  content: {
    type: Schema.Types.String,
    required: true,
    min: 1,
    max: 128,
  },
  timestamp: {
    type: Schema.Types.Date,
    required: true,
  },
});

const messageModel = model("messages", schema);

module.exports = messageModel;
