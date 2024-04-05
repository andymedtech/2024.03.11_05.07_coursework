const { Schema, model } = require("mongoose");

const schema = new Schema({
  user_id: {
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
  timechange: {
    type: Schema.Types.Date,
    required: true,
  },
});

const postModel = model("posts", schema);

module.exports = postModel;
