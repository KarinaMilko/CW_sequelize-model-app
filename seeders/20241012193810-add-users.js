"use strict";
const bcrypt = require("bcrypt");
// шифрування
// 1234 -> ljfdsklfjsdklf4335245пв2а4ипа52піав
// 1234 <- ljfdsklfjsdklf4335245пв2а4ипа52піав

// хешування
// 1234 -> ljfdsklfjsdklf4335245

// TODO move to constants.js
const SALT_RAUNDS = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nickname: "test",
          email: "mail@mail",
          tel: "+380123456789",
          passw_hash: bcrypt.hashSync("1234", SALT_RAUNDS),
          birthday: "2000-05-06",
          gender: "male",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
