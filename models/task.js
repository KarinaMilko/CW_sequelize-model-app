"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Task.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^$/,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          // пізніше за вчора
          isAfter: new Date(
            new Date().setDate(new Date().getDate() - 15)
          ).toISOString(),
        },
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
