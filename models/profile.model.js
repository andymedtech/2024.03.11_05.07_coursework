const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  name: Schema.Types.String,
  surname: Schema.Types.String,
  email: Schema.Types.String,
  password: Schema.Types.String,
});

const profileModel = model("profiles", profileSchema);

module.exports = profileModel;
