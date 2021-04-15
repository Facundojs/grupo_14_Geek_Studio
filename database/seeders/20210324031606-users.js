"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Facundo",
        last_name: "Serrano",
        password:
          "$2a$10$nNLcf374iPwze1BXReBZ.eUwvHxj0Enq62lPL6LX3eMCb.7gUiXcy",
        email: "facuserra2002@gmail.com",
        telephone: 1150312041,
        country: "Argentina",
        avatar: "facu_serrano.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },

      {
        first_name: "Mauro",
        last_name: "Pedrozo",
        password:
          "$2a$10$nNLcf374iPwze1BXReBZ.eUwvHxj0Enq62lPL6LX3eMCb.7gUiXcy",
        email: "mauropedrozo1@gmail.com",
        telephone: 1150312041,
        country: "Argentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
        avatar: "mauro_pedrozo.jgp",
      },

      {
        first_name: "Karina",
        last_name: "Escobar",
        password:
          "$2a$10$nNLcf374iPwze1BXReBZ.eUwvHxj0Enq62lPL6LX3eMCb.7gUiXcy",
        email: "kari.belen@gmail.com",
        telephone: 1198504020,
        country: "Argentina",
        avatar: "karina_escobar.jpg",
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

      {
        first_name: "facu",
        last_name: "facu",
        password:
          "$2a$10$nNLcf374iPwze1BXReBZ.eUwvHxj0Enq62lPL6LX3eMCb.7gUiXcy",
        email: "facu@gmail.com",
        telephone: 1198504020,
        country: "Argentina",
        avatar: "profile_testing.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
