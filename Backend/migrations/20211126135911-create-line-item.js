'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('line_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
<<<<<<< HEAD:Backend/migrations/20211126092924-create-line-item.js
      prod_id: {
        type: Sequelize.INTEGER
      },
      shop_id: {
        type: Sequelize.INTEGER
      },
      order_name: {
        type: Sequelize.STRING
      },
=======
      productId: {
        type: Sequelize.INTEGER
      },
      shoppingCartId: {
        type: Sequelize.INTEGER
      },
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b:Backend/migrations/20211126135911-create-line-item.js
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('line_items');
  }
};