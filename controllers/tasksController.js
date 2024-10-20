const { Task, User } = require("./../models");

module.exports.getTasks = async (req, res, next) => {
  try {
    const foundTasks = await Task.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: User,
        attributes: ["nickname"],
      },
      raw: true,
    });

    res.status(200).send({ data: foundTasks });
  } catch (error) {
    next(error);
  }
};
