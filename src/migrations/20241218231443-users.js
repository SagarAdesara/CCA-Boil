const Sequelize = require("sequelize");

/** @type {import('sequelize-cli').Migration} */

console.log("FILE MA POICHA");

  async function up({ queryInterface }) {
    console.log("saf");
    await queryInterface.createTable("users", {
      user_id: {
        // type: Sequelize.BINARY(16),
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });

    // await queryInterface.sequelize
    //   .query(`create table users ( user_id INT PRIMARY KEY  AUTO_INCREMENT, email_address varchar(255) NOT NULL,first_name varchar(255) NOT NULL,
    //   last_name varchar(255) NOT NULL,
    //   password varchar(255) NOT NULL,
    //   profile_pic varchar(255) NOT NULL,
    //   phone_number varchar(255));`);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  }

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }

module.exports = { up, down };
// const Sequelize = require("sequelize");

// module.exports = {
//   async up(queryInterface) {
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
//   },

//   async down(queryInterface) {
//     await queryInterface.dropTable("users");
//   },
// };
