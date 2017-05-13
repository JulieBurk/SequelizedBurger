

module.exports = function(sequelize, DataTypes){
  var Burgers = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
    });

  return Burgers;
}
// module.exports = Burgers;
