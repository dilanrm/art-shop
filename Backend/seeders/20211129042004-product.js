'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let products = JSON.parse(fs.readFileSync("./products.json", "utf8"));
     products = products.map((library) => {
       let {
         name,
         description,
         price,
         stock,
         category,
         sold,
         rating,
         view,
         userId,
       } = library;
 
       return {
         name,
         description,
         price,
         stock,
         category,
         sold,
         rating,
         view,
         userId,
         createdAt: new Date(),
         updatedAt: new Date(),
       };
     });
     await queryInterface.bulkInsert("products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("products", null, {});
  }
};
