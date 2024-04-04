// fsd_05
// 2024.03.11_05.07_coursework
const mongoose = require("mongoose");

const database = "fsd_05";

module.exports = async () => {
  await mongoose.connect(`mongodb://localhost:27017/${database}`);
  console.log(`database connection ${database} established`);
};
