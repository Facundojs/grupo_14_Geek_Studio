"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: Sequelize.DataTypes.STRING,
      category_id: Sequelize.DataTypes.INTEGER,
      price: Sequelize.DataTypes.DECIMAL,
      discount: Sequelize.DataTypes.INTEGER,
      category_id: Sequelize.DataTypes.INTEGER,
      image: Sequelize.DataTypes.STRING,
      features: Sequelize.DataTypes.TEXT,
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
