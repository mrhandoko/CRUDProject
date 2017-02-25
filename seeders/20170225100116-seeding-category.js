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
    var faker = require('faker')

    let newArr = []
    for (let i = 0; i <= 4; i++) {
      newArr.push({ name : faker.commerce.department(), createdAt: new Date(), updatedAt: new Date() })
    }
    return queryInterface.bulkInsert('Categories', newArr);
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
