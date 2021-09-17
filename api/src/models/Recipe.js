const { types } = require('pg');

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function (sequelize) {
  // defino el modelo
  return sequelize.define('Recipe', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUID4,
      allowNull:false,
      primaryKey:true
    },
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    summary:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    score:{
      type:DataTypes.FLOAT,
      allowNull:true,
      validate:{
        min:-1,
        max:100
      }
    },

    
    healthScore:{
      type:DataTypes.FLOAT,
      allowNull:true,
      validate:{
        min:-1,
        max:100
      }
    },

    stepsBySteps:{
      type:DataTypes.STRING,
      //type: DataTypes.ARRAY(DataTypes.TEXT),
      //type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true,
    },
    
      createinDB:{
      type:DataTypes.BOOLEAN,
      allownNull:false,
      defaultValue:true
    },
    
      dishTypes:{
       type:DataTypes.STRING,
       allowNull:true,
      }
  });
};
