'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Material.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });

      Material.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
        onDelete: 'CASCADE',
      });

      Material.belongsTo(models.Unit, {
        foreignKey: 'unitId',
        as: 'unit',
        onDelete: 'CASCADE',
      });

      Material.belongsTo(models.Supplier, {
        foreignKey: 'supplierId',
        as: 'supplier',
        onDelete: 'CASCADE',
      });
    }
  }
  Material.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Material name is required',
          },
          len: {
            args: [3, 50],
            msg: 'Material name must be between 3 and 50 characters',
          },
        },
      },
      stock: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: { msg: 'Stock is required' },
        },
      },
      minStock: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      unitId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Material unit is required',
          },
        },
      },
      unitCost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Material unit cost is required',
          },
        },
      },
      sku: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 50],
            msg: 'SKU must be between 0 and 50 characters',
          },
        },
      },
      categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Material category is required',
          },
        },
      },
      supplierId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Material supplier is required',
          },
        },
      },
      lastOrdered: {
        type: DataTypes.DATE,
        allowNull: true,
        isDate: true,
      },
      userId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Material user is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Material',
    }
  );
  return Material;
};
