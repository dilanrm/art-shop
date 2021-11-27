'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      line_item.belongsTo(models.product);
      line_item.belongsTo(models.shopping_cart);
    }
  };
  line_item.init({
    qty: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Qty must be not empty"
        },
        isNumeric: {
          message: "Qty must numeric"
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
    productId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "ProductId must be not empty"
        },
        isNumeric: {
          message: "ProductId must numeric"
        }
      }
    },
    shoppingCartId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "ShoppingCartId must be not empty"
        },
        isNumeric: {
          message: "ShoppingCartId must numeric"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};