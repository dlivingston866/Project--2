// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
    // Creates a "Food" model that matches up with DB
    const Food = sequelize.define("food", {
        food: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.INTEGER,
    });
    return Food;
}