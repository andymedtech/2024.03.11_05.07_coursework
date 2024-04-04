const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    min: 1,
    max: 20,
  },
  surname: {
    type: Schema.Types.String,
    required: false,
    min: 1,
    max: 20,
  },
  email: {
    type: Schema.Types.String,
    required: false,
  },
  login: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  avatar: {
    type: Schema.Types.String,
    required: false,
  },
});

const profileModel = model("profiles", schema);

module.exports = profileModel;
