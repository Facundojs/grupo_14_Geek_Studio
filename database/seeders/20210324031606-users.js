"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Facundo",
        last_name: "Serrano",
        password: "1234",
        email: "facuserra2002@gmail.com",
        telephone: 1150312041,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },

      {
        first_name: "Mauro",
        last_name: "Pedrozo",
        password: "1234",
        email: "mauropedrozo1@gmail.com",
        telephone: 1150312041,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },

      {
        first_name: "Karina",
        last_name: "Escobar",
        password: "1234",
        email: "kari.belen@gmail.com",
        telephone: 1198504020,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },

      {
        first_name: "admin",
        last_name: "admin",
        password: "1234",
        email: "admin@gmail.com",
        telephone: 1198504020,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },

      {
        first_name: "Ezequiel",
        last_name: "Cortes",
        password: "1234",
        email: "ecortes@digitalhouse.com",
        telephone: 1198504050,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 2,
      },

      {
        first_name: "Paola",
        last_name: "Escudero",
        password: "1234",
        email: "paola@gmail.com",
        telephone: 1198504020,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
