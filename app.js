const express = require("express");
const { errorHandlers } = require("./middleware");
const router = require("./routes");

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandlers.dbErrorHandler, errorHandlers.errorHandler);

module.exports = app;

// таски конкретного користувача
// GET /api/users/:userId/tasks

// отримати перелік тасок, щоб біля кожної було вказано юзера
// GET /api/tasks
