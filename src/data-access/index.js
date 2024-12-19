const mysql2 = require("mysql2");
const config = require("../config");

const connection = mysql2.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  database: config.mysql.database,
  password: config.mysql.password,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected");
  }
});
const mysql = connection.promise();

const makeUsersDb = require("./users.db");
const usersDb = makeUsersDb({ mysql, config });

const dbs = {
  usersDb,
};
module.exports = { mysql, ...dbs };
