'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supplier.hasMany(models.Material, {
        foreignKey: 'supplierId',
        as: 'materials',
        onDelete: 'CASCADE',
      });

      Supplier.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });
    }
  }
  Supplier.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Supplier name is required',
          },
          len: {
            args: [3, 50],
            msg: 'Supplier name must be between 3 and 50 characters',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'User id is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Supplier',
    }
  );
  return Supplier;
};
