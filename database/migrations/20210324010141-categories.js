"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("categories", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("categories");
  },
};
