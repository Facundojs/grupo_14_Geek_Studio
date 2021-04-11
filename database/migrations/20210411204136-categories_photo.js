'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    queryInterface.addColumn('categories', 'image', Sequelize.STRING, {
      after: 'name' // after option is only supported by MySQL
   });

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn("image");
  }
};
