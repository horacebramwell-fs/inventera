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
      'Suppliers',
      [
        {
          id: 'a210ae06-ade4-400a-810a-292b4e30d54e',
          name: 'Wooden Wick Co.',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2dbdc3d9-ef17-428c-8b89-9ba14a337e47',
          name: 'Dream Vessels',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'eed12021-6b7f-4968-95d6-74a40799b2e3',
          name: 'Aztec Candle Co.',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'a2bb5ef5-9d06-4f1b-aadc-e2dbb25bba77',
          name: 'Candle Science',
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
    await queryInterface.bulkDelete('Suppliers', null, {});
  },
};
