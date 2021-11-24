'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prim_filename: {
        type: Sequelize.STRING
      },
      prim_filesize: {
        type: Sequelize.STRING
      },
      prim_filetype: {
        type: Sequelize.STRING
      },
      prim_primary: {
        type: Sequelize.BOOLEAN
      },
      prim_prod_id: {
        type: Sequelize.INTEGER
      },
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
    await queryInterface.dropTable('product_images');
  }
};