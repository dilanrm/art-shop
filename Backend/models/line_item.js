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
      line_item.belongsTo(models.product);
      line_item.belongsTo(models.shopping_cart);
    }
  };
  line_item.init({
    qty: DataTypes.INTEGER,
    status: DataTypes.STRING,
    prod_id: DataTypes.INTEGER,
    shop_id: DataTypes.INTEGER,
    order_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'line_item',
  });
  return line_item;
};