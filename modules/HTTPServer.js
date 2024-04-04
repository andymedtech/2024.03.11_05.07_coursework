const express = require("express");
const router = require("../routes");

const app = express();

app.use(express.json()); // расшифровка JSON
// app.use(express.urlencoded()); // расшифровка URL
app.use("/api", router); // префикс к маршуту (good practice)

// порт по умолчанию 8080, если не передаётся другой из /index.js
const run = (port = 8080) => {
  app.listen(port);
  console.log(`Server running on ${port} port`);
};

module.exports = {
  app,
  run,
};
