'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: '6d4377a5-5f3e-48d2-9941-5ac92293d538',
          name: 'Candles',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '02e585a2-9f3f-457e-b5b3-5887af0a2aba',
          name: 'Waxes',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'a0396e18-13fd-487a-a0eb-ea0cd040c561',
          name: 'Oils',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '6994fb72-9f3f-45a7-875d-cc47760eb214',
          name: 'Wicks',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e2d32269-6806-4ff0-a8c7-a2188a11029c',
          name: 'Vessels',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
