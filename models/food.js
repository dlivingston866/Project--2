// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes){
  // Creates a "Chirp" model that matches up with DB
  const Food = sequelize.define("food", {
    food: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DATE,
    region: DataTypes.STRING
  });
  return Food;
}
