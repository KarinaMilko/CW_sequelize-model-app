const { Task } = require("./../models");

// Реалізувати CRUD над тасками в навчальному проєкті, аналогічно CRUD`у над користувачами:
// post /api/tasks
// get /api/tasks
// get /api/tasks/:taskId
// *patch /api/tasks/:taskId
// *delete /api/tasks/:taskId

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    const createdTask = await Task.create(body);
    res.status(201).send({ data: createdTask });
  } catch (error) {
    console.error("Error creating task:", error);
    next(error);
  }
};
module.exports.getTask = () => {};
module.exports.getTaskById = () => {};
module.exports.updateTaskById = () => {};
module.exports.deleteTaskById = () => {};
