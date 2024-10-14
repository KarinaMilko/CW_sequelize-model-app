const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("./../models");

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
    res.status(201).send(prepatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  res.status(501).send("GET /api/users Not Implemented");
};

module.exports.getUserById = async (req, res, next) => {};

module.exports.updateUserById = async (req, res, next) => {};

module.exports.deleteUserById = async (req, res, next) => {};
