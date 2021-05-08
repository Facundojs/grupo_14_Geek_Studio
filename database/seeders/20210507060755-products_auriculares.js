"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "AURICULARES HYPERX CLOUD STINGER",
        price: 5922,
        discount: 0,
        category_id: 2,
        image: "auriculares-hyperx-cloud-stinger-gaming-black-pc-ps4-0.jpg",
        features:
          "Los audífonos HyperX Cloud Stinger™ son ideales para gamers que buscan comodidad ligera, calidad de sonido superior y una mayor comodidad. Con solo 275 gramos, resultan cómodos en tu cuello y las orejeras rotan en un ángulo de 90 grados para un mejor ajuste. Sus altavoces direccionales de 50 mm colocan el sonido directamente dentro del oído para una mayor precisión auditiva y una calidad de sonido exclusiva.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "AURICULARES HYPERX CLOUD STINGER",
        price: 5050,
        discount: 0,
        category_id: 2,
        image: "auriculares-trust-carus-ps4-gxt322b-0.jpg",
        features:
          "Height of main product (in mm) 210 mm. Width of main product (in mm) 215 mm.  Depth of main product (in mm) 110 mm. Total weight 325 g. Connection type wired.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "AURICULARES HYPERX STINGER CORE XBOX",
        price: 6449,
        discount: 0,
        category_id: 2,
        image: "auriculares-hyperx-stinger-core-xbox-0.jpg",
        features:
          "Height of main product (in mm) 210 mm. Width of main product (in mm) 215 mm.  Depth of main product (in mm) 110 mm. Total weight 325 g. Connection type wired.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "AURICULARES RAZER KRAKEN TE WIRED GREEN",
        price: 13320,
        discount: 20,
        category_id: 2,
        image: "auriculares-razer-kraken-te-wired-green-0.jpg",
        features:
          "Controladores optimizados de 50 mm. Almohadillas de gel refrigerantes. Micrófono unidireccional retráctil.Estructura de aluminio de Bauxita",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
