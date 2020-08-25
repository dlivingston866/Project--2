module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("newFoods", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return newFoods;
};
