'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    product_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Item.belongsTo(models.Category)
      }
    }
  });
  return Item;
};
