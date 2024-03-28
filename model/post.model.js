const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  user_id: Schema.Types.String,
  content: Schema.Types.String,
  timestamp: Schema.Types.Date,
});

const postModel = model("posts", postSchema);

module.exports = postModel;
