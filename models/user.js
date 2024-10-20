"use strict";
const { Model, Op } = require("sequelize");
const bcrypt = require("bcrypt");

const SALT_RAUNDS = 10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      nickname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 50],
        },
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      tel: {
        type: DataTypes.STRING(13),
        unique: true,
        validate: {
          is: /^\+380\d{9}$|^0\d{9}$/,
        },
      },
      passwHash: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("passwHash", bcrypt.hashSync(value, SALT_RAUNDS));
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        validate: {
          isIn: [["male", "female", "other"]],
        },
      },
      role: {
        type: DataTypes.ENUM("executor", "manager"),
        allowNull: false,
        defaultValue: "executor",
        validate: {
          isIn: [["executor", "manager"]],
        },
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
    }
  );
  return User;
};
// passwHash <-> passw_hash
// model           table
// { field: 'passw_hash' }
// isDualSim->is_dual_sim
// isNfs -> is_nfc
// isNFC -> { field: 'is_nfc' } -> is_nfc (is_n_f_c)
