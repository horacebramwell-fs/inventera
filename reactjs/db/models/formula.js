'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Formula.belongsTo(models.Unit, {
        foreignKey: 'unitId',
        as: 'unit',
      });

      Formula.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Formula.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a name',
          },
          len: {
            args: [3, 50],
            msg: 'Name must be between 3 and 50 characters',
          },
        },
      },
      containerSize: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a container size',
          },
        },
      },
      containerFill: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a container fill',
          },
        },
      },
      fragranceLoad: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a fragrance load',
          },
        },
      },
      fragranceAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a fragrance amount',
          },
        },
      },
      waxAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Please enter a wax amount',
          },
        },
      },
      unitId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Unit id is required',
          },
        },
      },
      note: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          max: 50,
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'User id is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Formula',
    }
  );
  return Formula;
};
