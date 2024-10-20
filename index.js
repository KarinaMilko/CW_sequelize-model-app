require("dotenv").config();
const http = require("node:http");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";

const httpServer = http.createServer(app);

httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening http://${HOST}:${PORT}`)
);
console.log("process.env :>> ", process.env.PORT);
