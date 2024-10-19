"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: true,
        validate: {
          len: [2, 200],
        },
      },
      completed: {
        type: DataTypes.ENUM("completed", "not completed"),
        allowNull: false,

        validate: {
          isIn: [["completed", "not completed"]],
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isAfter: new Date().toISOString(),
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Task",
      underscored: true,
    }
  );
  return Task;
};
