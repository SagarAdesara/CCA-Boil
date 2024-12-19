function makeGetUserAction({ Joi, getUserById }) {
  return async function getUserAction(req, res) {
    try {
      let userId = req.params.id;
      ({ userId } = validateGetUserInput({ userId }));

      const users = await getUserById({ userId });
      res.status(200).send(users);
    } catch (err) {
      console.error(`ERROR in getUserAction controller :: ${err.message}`, {
        stack: err.stack,
      });
      res.status(400).send(err.message);
    }
  };
  function validateGetUserInput({ userId }) {
    const schema = Joi.object({
      userId: Joi.string()
        .trim()
        // .guid({ version: ["uuidv1", "uuidv2", "uuidv3", "uuidv4"] })
        .guid()
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
module.exports = makeGetUserAction;
