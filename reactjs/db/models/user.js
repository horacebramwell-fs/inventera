'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Unit, {
        foreignKey: 'userId',
        as: 'units',
      });
      User.hasMany(models.Category, {
        foreignKey: 'userId',
        as: 'categories',
      });

      User.hasMany(models.Supplier, {
        foreignKey: 'userId',
        as: 'suppliers',
      });

      User.hasMany(models.Material, {
        foreignKey: 'userId',
        as: 'materials',
      });

      User.hasMany(models.Formula, {
        foreignKey: 'userId',
        as: 'formulas',
      });

      User.hasMany(models.Product, {
        foreignKey: 'userId',
        as: 'products',
      });

      User.hasMany(models.Production, {
        foreignKey: 'userId',
        as: 'productions',
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Name is required',
          },
          len: {
            args: [3, 50],
            msg: 'Name must be between 3 and 50 characters',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Email is required',
          },
          isEmail: {
            msg: 'Email must be a valid email',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password is required',
          },
        },
      },
      businessName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          max: 50,
        },
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          max: 50,
        },
      },
      avatarId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          max: 255,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
