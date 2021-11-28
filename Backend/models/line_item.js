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
<<<<<<< HEAD
=======
      // define association here
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
      line_item.belongsTo(models.product);
      line_item.belongsTo(models.shopping_cart);
    }
  };
  line_item.init({
<<<<<<< HEAD
    qty: DataTypes.INTEGER,
    status: DataTypes.STRING,
    prod_id: DataTypes.INTEGER,
    shop_id: DataTypes.INTEGER,
    order_name: DataTypes.STRING
=======
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
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
  }, {
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};