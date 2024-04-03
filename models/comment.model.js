const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  user_id: Schema.Types.String,
  post_id: Schema.Types.String,
  content: Schema.Types.String,
  timestamp: Schema.Types.Date,
});

const commentModel = model("comments", commentSchema);

module.exports = commentModel;
