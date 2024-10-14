const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("./../models");

// TODO yup validation mw (422)
module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const SALT_RAUNDS = 10;
    body.passwHash = await bcrypt.hash(body.passwHash, SALT_RAUNDS);
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

module.exports.updateUserById = async (req, res, next) => {};

module.exports.deleteUserById = async (req, res, next) => {};
