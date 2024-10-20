const { Router } = require("express");
const { tasksController } = require("../controllers");

const tasksRouter = Router();

// /api/tasks
tasksRouter
  .route("/")
  .post(() => {})
  .get(tasksController.getTasks);

tasksRouter
  .route("/:taskId")
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = tasksRouter;
