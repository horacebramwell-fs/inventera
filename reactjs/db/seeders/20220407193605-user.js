'use strict';
const bcrypt = require('bcrypt');

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
      'Users',
      [
        {
          id: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          name: 'John Martin',
          email: 'johnmart@email.com',
          password: bcrypt.hashSync('JohnMartin123!', 10),
          businessName: 'Johns Candles',
          website: 'johnscandles.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '05fed60d-69da-4bc4-8522-305a019ecc7d',
          name: 'Jane Lopez',
          email: 'janelo@email.com',
          password: bcrypt.hashSync('JaneLopez123!', 10),
          businessName: 'Jane Candles',
          website: 'janecandles.com',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
