const { Schema, model } = require("mongoose");

const likeSchema = new Schema({
  user_id: Schema.Types.String,
  post_id: Schema.Types.String,
  timestamp: Schema.Types.Date,
});

const likeModel = model("likes", likeSchema);

module.exports = likeModel;
