"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Componentes",
      },
      {
        name: "Perifericos",
      },
      {
        name: "Gabinetes",
      },
      {
        name: "Sillas",
      },
      {
        name: "Combos",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
