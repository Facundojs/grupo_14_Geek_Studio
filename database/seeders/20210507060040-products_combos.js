"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "PC GAMER AMD ATHLON 3000G - 8GB - 1TB",
        price: 42500,
        discount: 20,
        category_id: 5,
        image: "pc-gamer-amd-athlon-3000g--8gb--1tb--kit-0.jpg",
        features: "PC GAMER AMD ATHLON 3000G - 8GB - 1TB ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "PC INTEL CORE I3 10100 + H410 + 8GB + 1TB + KIT",
        price: 42500,
        discount: 20,
        category_id: 5,
        image: "pc-intel-core-i3-10100--h410--8gb--1tb--kit-0.jpg",
        features: "PC INTEL CORE I3 10100 + H410 + 8GB + 1TB + KIT ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "PC EMPRESA INTEL I5 9400F - 16GB - SSD + 1TB - WIN10 PRO",
        price: 42500,
        discount: 20,
        category_id: 5,
        image: "pc-empresa-intel-i5-9400f--16gb--ssd--1tb--win10-pro-0.jpg",
        features:
          "PC EMPRESA INTEL I5 9400F - 16GB - SSD + 1TB - WIN10 PRO - Ideal para juegos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
