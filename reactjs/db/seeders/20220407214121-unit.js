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
      'Units',
      [
        {
          id: '47cba104-5bbd-4b5b-af25-e63be0ebaf20',
          name: 'Pound',
          abbr: 'lb',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '61742218-bccb-4f32-89b0-d1622773a1b6',
          name: 'Ounce',
          abbr: 'oz',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e1b54e92-500f-4417-8389-0d99a5a227ae',
          name: 'Kilogram',
          abbr: 'kg',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'df70344f-7caa-43fb-a748-645d1b93ae88',
          name: 'Gram',
          abbr: 'g',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '17b241e9-02ff-4860-a665-080ea2f2ffa7',
          name: 'Milligram',
          abbr: 'mg',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '12952d31-9baf-4846-9f45-0074b0329eb2',
          name: 'Liter',
          abbr: 'l',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'f8eff037-532c-455c-9a32-82229752e540',
          name: 'Milliliter',
          abbr: 'ml',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '397b50eb-a92a-4102-80df-90d493c4aa02',
          name: 'Gallon',
          abbr: 'gal',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'bf326565-e4cd-4823-90ca-056453cd516a',
          name: 'Pieces',
          abbr: 'pcs',
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
    await queryInterface.bulkDelete('Units', null, {});
  },
};
