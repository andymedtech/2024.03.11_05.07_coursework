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
  },
  timechange: {
    type: Schema.Types.Date,
  },
});

const postModel = model("posts", schema);

module.exports = postModel;
