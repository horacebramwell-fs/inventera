'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Formulas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      containerSize: {
        type: Sequelize.DECIMAL,
      },
      containerFill: {
        type: Sequelize.DECIMAL,
      },
      fragranceLoad: {
        type: Sequelize.DECIMAL,
      },
      fragranceAmount: {
        type: Sequelize.DECIMAL,
      },
      waxAmount: {
        type: Sequelize.DECIMAL,
      },
      unitId: {
        type: Sequelize.UUID,
        references: {
          model: 'Units',
          key: 'id',
        },
      },
      note: {
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Formulas');
  },
};
