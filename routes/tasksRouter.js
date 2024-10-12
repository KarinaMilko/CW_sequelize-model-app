const { Router } = require("express");

const tasksRouter = Router();

// /api/tasks
tasksRouter
  .route("/")
  .post(() => {})
  .get((req, res, next) => {
    res.status(501).send("Not Implemented tasks");
  });

tasksRouter
  .route("/:taskId")
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = tasksRouter;
