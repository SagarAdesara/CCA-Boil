function makeGetUserById({ Joi, getUserByIdDb }) {
  return async function getUserById({ userId }) {
    try {
      ({ userId } = validateGetUserByIdInput({ userId }));

      let user = await getUserByIdDb({ userId });
      return user;
    } catch (err) {
      throw err;
    }
  };

  function validateGetUserByIdInput({ userId }) {
    const schema = Joi.object({
      userId: Joi.string()
        .guid({ version: ["uuidv1"] })
        .required(),
    });
    const { error, value } = schema.validate({ userId });
    if (error) {
      throw new Error(error.details[0].message);
    } else {
      return value;
    }
  }
}
module.exports = makeGetUserById;
