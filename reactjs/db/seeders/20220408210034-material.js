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
      'Materials',
      [
        {
          id: 'fd434df6-0076-417c-a6ba-b38e18d2a539',
          name: 'Coconut Soy Wax',
          stock: 32,
          minStock: 10,
          unitId: '47cba104-5bbd-4b5b-af25-e63be0ebaf20',
          unitCost: 2.32,
          sku: 'COC-SWA',
          categoryId: '02e585a2-9f3f-457e-b5b3-5887af0a2aba',
          supplierId: 'a210ae06-ade4-400a-810a-292b4e30d54e',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          lastOrdered: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '14b5b963-656c-4b50-ba0f-ffefb2eb63b1',
          name: 'Deluxe Satin Soy Wax',
          stock: 15,
          minStock: 5,
          unitId: '47cba104-5bbd-4b5b-af25-e63be0ebaf20',
          unitCost: 1.65,
          sku: 'DEL-SWA',
          categoryId: '02e585a2-9f3f-457e-b5b3-5887af0a2aba',
          supplierId: 'a210ae06-ade4-400a-810a-292b4e30d54e',
          userId: 'e05b897e-eb9d-4345-8845-666450c6b6be',
          lastOrdered: new Date(),
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
    await queryInterface.bulkDelete('materials', null, {});
  },
};
