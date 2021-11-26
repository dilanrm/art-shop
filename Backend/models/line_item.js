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
    qty: DataTypes.INTEGER,
    status: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    shopping_cartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};