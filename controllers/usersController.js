const _ = require("lodash");
const createHttpError = require("http-errors");
const { User } = require("./../models");

// TODO yup validation mw (422)
module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    // const prepatedUser = { ...createdUser.get() };
    // delete prepatedUser.passwHash;
    // delete prepatedUser.createdAt;
    // delete prepatedUser.updatedAt;
    const prepatedUser = _.omit(createdUser.get(), [
      "passwHash",
      "createdAt",
      "updatedAt",
    ]);
    res.status(201).send({ data: prepatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;
  // TODO pagination mw
  const limit = results;
  const offset = (page - 1) * results;
  try {
    const foundUsers = await User.findAll({
      attributes: { exclude: ["passwHash", "createdAt", "updatedAt"] },
      limit,
      offset,
      order: ["id"],
      raw: true,
    });
    res.status(200).send({ data: foundUsers });
  } catch (error) {
    next(err);
  }
};

module.exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const foundUser = await User.findByPk(userId, {
      raw: true,
      attributes: { exclude: ["passwHash", "createdAt", "updatedAt"] },
    });
    if (!foundUser) {
      return next(createHttpError(404, "User Not Found"));
    }
    res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserById = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  // TODO yup validation mw (422)
  try {
    const [, [updatedUser]] = await User.update(body, {
      where: { id: userId },
      raw: true,
      returning: true,
    });
    if (!updatedUser) {
      return next(createHttpError(404, "User Not Found"));
    }
    const prepatedUser = _.omit(updatedUser, [
      "passwHash",
      "createdAt",
      "updatedAt",
    ]);
    res.status(200).send({ data: prepatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.updateOrCreateUserById = async (req, res, next) => {
  // знайти конистувача 1
  // якщо існує - оновити 1
  // інакше - створити    1
  //  1 + 1 = 2
  // спробувати оновити 1
  // якщо оновилося - ок 0
  // інакше - створити 1
  // 1 + 0 = 1 or 1 + 1 = 2
  const {
    body,
    params: { userId },
  } = req;
  // TODO yup validation mw (422)
  try {
    const [, [updatedUser]] = await User.update(body, {
      where: { id: userId },
      raw: true,
      returning: true,
    });
    if (!updatedUser) {
      body.id = userId;
      return next();
    }
    const prepatedUser = _.omit(updatedUser, [
      "passwHash",
      "createdAt",
      "updatedAt",
    ]);
    res.status(200).send({ data: prepatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const deletedCount = await User.destroy({
      where: { id: userId },
    });
    if (deletedCount === 0) {
      return next(createHttpError(404, "User Not Found"));
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
