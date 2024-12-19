const Joi = require("joi");
const useCases = require("../../use-cases");

const makeGetUserAction = require("./get-user");
const getUserAction = makeGetUserAction({
  Joi,
  getUserById: useCases.users.getUserById,
});

const makeGetUsersAction = require("./get-user");
const getUsersAction = makeGetUsersAction({});

module.exports = {
  getUsersAction,
  getUserAction,
};
