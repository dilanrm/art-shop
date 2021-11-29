'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shopping_cart.belongsTo(models.user);
      shopping_cart.hasMany(models.line_item);
    }
  };
  shopping_cart.init({
    createdOn: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          message: "CreatedOn must be not empty"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Status must be not empty"
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "UserId must be not empty"
        },
        isNumeric: {
          message: "UserId must"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'shopping_cart',
  });
  return shopping_cart;
};