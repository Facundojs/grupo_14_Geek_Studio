'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
// Update data
    await queryInterface.sequelize.query("UPDATE categories SET image = 'componentes.jpg' WHERE id = 1;");
    await queryInterface.sequelize.query("UPDATE categories SET image = 'perifericos.png' WHERE id = 2;");
    await queryInterface.sequelize.query("UPDATE categories SET image = 'gabinetes.jpg' WHERE id = 3;");
    await queryInterface.sequelize.query("UPDATE categories SET image = 'sillaGamer.png' WHERE id = 4;");
    await queryInterface.sequelize.query("UPDATE categories SET image = 'combos.jpg' WHERE id = 5;");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("UPDATE categories SET image = 'null';");
  }
};
