const path = require("node:path");
const express = require("express");
const { errorHandlers } = require("./middleware");
const router = require("./routes");

const app = express();

app.use(express.json());

// TODO move to constants.js
app.use(express.static(path.resolve(process.env.STATIC_FOLDER)));

app.use("/api", router);

// app.use(errorHandlers.dbErrorHandler, errorHandlers.errorHandler);
app.use(
  errorHandlers.multerErrorHandler,
  errorHandlers.dbErrorHandler,
  errorHandlers.errorHandler
);

module.exports = app;

// таски конкретного користувача
// GET /api/users/:userId/tasks

// отримати перелік тасок, щоб біля кожної було вказано юзера
// GET /api/tasks
