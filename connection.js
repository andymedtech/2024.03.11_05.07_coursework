// fsd_05
// 2024.03.11_05.07_coursework
const mongoose = require("mongoose");

async function fsd_05() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fsd_05");
  console.log("Connecting to the database fsd_05 successful");
}

module.exports = fsd_05;
