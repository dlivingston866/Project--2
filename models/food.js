module.exports = function(sequelize, DataTypes) {
    var NewFoods = sequelize.define("NewFoods", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return NewFoods;
};