const { Schema, model } = require("mongoose");

const schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "profiles",
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: "posts",
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

const commentModel = model("comments", schema);

module.exports = commentModel;
