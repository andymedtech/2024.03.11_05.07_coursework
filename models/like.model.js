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
  timestamp: {
    type: Schema.Types.Date,
    required: true,
  },
});

const likeModel = model("likes", schema);

module.exports = likeModel;
