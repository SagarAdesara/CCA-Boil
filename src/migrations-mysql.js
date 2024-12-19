"use strict";
const { Sequelize } = require("sequelize");
const path = require("path");
const { Umzug, SequelizeStorage, ApplyMigrationsAction } = require("umzug");
const config = require("./config");

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: "localhost",
    dialect: "mysql",
    logging: console.log,
  }
);
console.log(path.join(__dirname, "migrations", "*.js"));
const umzug = new Umzug({
  migrations: { glob: path.join(__dirname, "migrations", "*.js") },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

(async () => await umzug.up())();

// "use strict";
// const { Sequelize } = require("sequelize");
// const path = require("path");
// const { Umzug, SequelizeStorage } = require("umzug");
// const config = require("./config");

// const sequelize = new Sequelize(
//   config.mysql.database,
//   config.mysql.user,
//   config.mysql.password,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     logging: console.log,
//   }
// );

// const queryInterface = sequelize.getQueryInterface();

// (async () => {
//   try {
//     console.log("Testing migration...");
//     await queryInterface.createTable("users", {
//       user_id: {
//         type: Sequelize.DataTypes.UUID,
//         defaultValue: Sequelize.DataTypes.UUIDV4,
//         allowNull: false,
//         primaryKey: true,
//       },
//       first_name: {
//         type: Sequelize.DataTypes.STRING,
//         allowNull: false,
//       },
//       last_name: {
//         type: Sequelize.DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: Sequelize.DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//     });
//     console.log("Migration ran successfully.");
//   } catch (error) {
//     console.error("Error running migration:", error);
//   } finally {
//     await sequelize.close();
//   }
// })();

// const umzug = new Umzug({
//   migrations: { glob: path.resolve(__dirname, "./migrations/*.js") },
//   context: sequelize.getQueryInterface(),
//   storage: new SequelizeStorage({ sequelize }),
//   logger: console,
// });

// const migrationGlob = path.resolve(__dirname, "./migrations/*.js");
// console.log("Looking for migrations in:", migrationGlob);

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connection established.");
//     const pending = await umzug.pending();
//     console.log(pending.map((m) => m.name));
//     console.log("Starting migrations...");
//     await umzug.up();
//     console.log("Migrations completed successfully!");
//   } catch (error) {
//     console.error("Migration failed:", error);
//   } finally {
//     await sequelize.close();
//   }
// })();
