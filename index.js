// Connection to MongoDB from Docker
const connectionToDB = require("./modules/connectionToDB");
const { run: startHTTPServer } = require("./modules/HTTPServer");

const run = async () => {
  await connectionToDB();
  startHTTPServer(8080);
};

run();
