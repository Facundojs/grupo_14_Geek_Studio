"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("user_type", [
      {
        type_name: "Administrador",
      },
      {
        type_name: "Comprador",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_type", null, {});
  },
};
