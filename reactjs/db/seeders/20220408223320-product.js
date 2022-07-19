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
      'Products',
      [
        {
          id: '4e54459f-19bb-4792-8907-5f84c9748e47',
          name: '14 oz Candle',
          stock: 5,
          minStock: 2,
          unitCost: 5.0,
          sku: '14-CAN',
          unitId: '61742218-bccb-4f32-89b0-d1622773a1b6',
          categoryId: '6d4377a5-5f3e-48d2-9941-5ac92293d538',
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
    await queryInterface.bulkDelete('products', null, {});
  },
};
