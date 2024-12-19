const dbs = require("../../data-access");

const Joi = require("joi");

const makeGetUserById = require("./get-user-by-id");
const getUserById = makeGetUserById({
  Joi,
  getUserByIdDb: dbs.usersDb.getUserByIdDb,
});

module.exports = {
  getUserById,
};
