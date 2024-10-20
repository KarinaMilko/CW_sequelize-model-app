"use strict";
const bcrypt = require("bcrypt");
require("dotenv").config();
// шифрування
// 1234 -> ljfdsklfjsdklf4335245пв2а4ипа52піав
// 1234 <- ljfdsklfjsdklf4335245пв2а4ипа52піав

// хешування
// 1234 -> ljfdsklfjsdklf4335245

// TODO move to constants.js
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nickname: "test1",
          email: "mail1@mail",
          tel: "+380123456744",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2000-05-06",
          gender: "male",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          nickname: "test2",
          email: "mail2@mail",
          tel: "+380123456742",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2002-05-06",
          gender: "female",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          nickname: "test3",
          email: "mail3@mail",
          tel: "+380123456743",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2003-03-16",
          gender: "male",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          nickname: "test4",
          email: "mail4@mail",
          tel: "+380123456740",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2000-05-28",
          gender: "female",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          nickname: "test5",
          email: "mail5@mail",
          tel: "+380123456745",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2005-07-06",
          gender: "male",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          nickname: "test6",
          email: "mail6@mail",
          tel: "+380123456746",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2006-06-06",
          gender: "male",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          nickname: "test7",
          email: "mail7@mail",
          tel: "+380123456747",
          passw_hash: bcrypt.hashSync("1234", SALT_ROUNDS),
          birthday: "2004-02-07",
          gender: "female",
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
