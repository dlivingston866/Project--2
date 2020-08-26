module.exports = function(sequelize, DataTypes) {
    var newFoods = sequelize.define("new_foodsDB", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return newFoods;
};