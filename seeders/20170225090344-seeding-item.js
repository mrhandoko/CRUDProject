'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // var faker = require('faker')
    //
    // let newArr = []
    // for (let i = 0; i <= 10; i++) {
    //   newArr.push({ product_name : faker.commerce.productName(), quantity : faker.random.number(), createdAt: new Date(), updatedAt: new Date() })
    // }
    // return queryInterface.bulkInsert('Items', newArr);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
