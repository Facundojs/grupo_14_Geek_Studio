"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "Silla Gamer Kanji Dooku KJ-488TB",
        price: 39900,
        discount: 20,
        category_id: 4,
        image: "Kanji_Dooku_KJ-488TB_180.jpg",
        features:
          "Silla Gamer Kanji Dooku KJ-488TB 180 Grados Apoya Pies Black Blue ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Silla Gamer AEROCOOL THUNDERX3",
        price: 51179,
        discount: 9,
        category_id: 4,
        image: "AEROCOOL_THUNDERX3_TC5.jpg",
        features: "Silla Gamer AEROCOOL THUNDERX3 TC5 Bumble Bee Yellow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Silla Gamer Aerocool Duke Lite ASH",
        price: 51179,
        discount: 9,
        category_id: 4,
        image: "Aerocool__Duke_Lite_ASH_Black_e938e10d-grn.jpg",
        features: "Silla Gamer Aerocool Duke Lite ASH Black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Silla Gamer AK-Racing Gaming",
        price: 61500,
        discount: 12,
        category_id: 4,
        image: "Silla_Gamer_AK-Racing_Gaming.jpg",
        features: "Silla Gamer AK-Racing Gaming Chair OCTANE Black ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
