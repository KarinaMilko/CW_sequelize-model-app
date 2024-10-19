const { Router } = require("express");
const { tasksController } = require("../controllers");

const tasksRouter = Router();

// /api/tasks
tasksRouter
  .route("/")
  .post(tasksController.createTask)
  .get(tasksController.getTask);

tasksRouter
  .route("/:taskId")
  .get(tasksController.getTaskById)
  .patch(tasksController.updateTaskById)
  .delete(tasksController.deleteTaskById);

module.exports = tasksRouter;
