"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Meals",
      [
        {
          title: "meal1.title",
          description: "meal1.description",
          location: "location1",
          price: 120,
          max_seats: 12,
          available_seats: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "meal2.title",
          description: "meal2.description",
          location: "location1",
          price: 120,
          max_seats: 12,
          available_seats: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pizza",
          title: "meal3.title",
          description: "meal3.description",
          price: 130,
          max_seats: 11,
          available_seats: 11,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pizza",
          title: "meal4.title",
          description: "meal4.description",
          price: 120,
          max_seats: 12,
          available_seats: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "meal5.title",
          description: "meal5.description",
          price: 60,
          max_seats: 12,
          available_seats: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Meals", null, {});
  },
};
