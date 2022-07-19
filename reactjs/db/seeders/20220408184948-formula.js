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
      'Formulas',
      [
        {
          id: '79d9091d-4d32-45d0-8ccb-737aae96778f',
          name: '14 oz. Candle',
          containerSize: '14',
          containerFill: '12',
          fragranceLoad: '0.12',
          fragranceAmount: '1.44',
          waxAmount: '10.56',
          unitId: '61742218-bccb-4f32-89b0-d1622773a1b6',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '7f21191a-6ef4-4df3-8e5a-a7784f40ceb1',
          name: '9 oz. Candle',
          containerSize: '9',
          containerFill: '6',
          fragranceLoad: '0.10',
          fragranceAmount: '0.60',
          waxAmount: '5.40',
          unitId: '61742218-bccb-4f32-89b0-d1622773a1b6',
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
    await queryInterface.bulkDelete('Formulas', null, {});
  },
};
