"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      tel: DataTypes.STRING,
      passwHash: DataTypes.STRING, // { field: 'passw_hash' }
      birthday: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      role: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      underscored: true, // тільки для моделькі
    }
  );
  return User;
};
// passwHash <-> passw_hash
// model           table
// { field: 'passw_hash' }

// isDualSim->is_dual_sim
// isNfs -> is_nfc
// isNFC ->{ field: 'is_nfc' } is_nfc (is_n_f_c)
