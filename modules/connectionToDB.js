// fsd_05
// 2024.03.11_05.07_coursework
const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect("mongodb://localhost:27017/fsd_05");
  console.log("database connection fsd_05 established");
};
