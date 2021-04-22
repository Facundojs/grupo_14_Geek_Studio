'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Admin",
        last_name: "Admin",
        password:
          "$2a$10$bDBLLc0YpON/wZl6Ttm7xOLY2wkRkvG6SWcMG93NLqSmHsm6hGI8i", //Password: 'Admin'
        email: "admin@admin.com",
        telephone: 123456789,
        country: "Argentina",
        avatar: "Admin.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 1,
      },
      {
        first_name: "User",
        last_name: "User",
        password:
          "$2a$10$E4FdAbOTSYsrwDXE9eVmj.vTLZHHYpoQBsUE08JD1yLjtAFAoNf.u", //Password: 'User'
        email: "user@user.com",
        telephone: 123456789,
        country: "Argentina",
        avatar: "User.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_type_id: 2,
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
