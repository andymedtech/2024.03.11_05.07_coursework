const express = require("express");
const router = require("../routes");
const cors = require("cors"); // frontend

const app = express();

// frontend cors для совместимости адресов (добавили библиотеку)
app.use(cors()); // frontend

app.use(express.json()); // расшифровка JSON
// app.use(express.urlencoded()); // расшифровка URL
app.use("/api", router); // префикс к маршуту (good practice)

// frontend: express static folder
// http://localhost:8080/index.html
app.use(express.static("public")); // frontend

// порт по умолчанию 8080, если не передаётся другой из /index.js
const run = (port = 8080) => {
  app.listen(port);
  console.log(`Server running on ${port} port`);
};

module.exports = {
  app,
  run,
};
