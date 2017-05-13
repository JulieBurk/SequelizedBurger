

module.exports = function(sequelize, DataTypes){
  var Burgers = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured:{
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    } 

   });

  return Burgers;
}
// module.exports = Burgers;
