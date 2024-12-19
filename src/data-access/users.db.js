const TABLE_NAME = "users";

function makeUsersDb({ mysql, config }) {
  return {
    getUserByIdDb,
  };

  async function getUserByIdDb({ userId }) {
    try {
      console.log("Inside sql query of get User By Id (dataaccess)");
      let [result, fields] = await mysql.execute(
        `SELECT BIN_TO_UUID(user_id) as user_id, first_name, last_name, email FROM ${config.mysql.database}.${TABLE_NAME} where user_id = UUID_TO_BIN(?)`,
        [userId]
      );
      return [result[0], fields];
    } catch (err) {
      throw err;
    }
  }
}
module.exports = makeUsersDb;
