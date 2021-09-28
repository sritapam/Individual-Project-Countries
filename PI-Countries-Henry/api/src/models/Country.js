const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    
    alpha3Code:{
      type: DataTypes.STRING(3),
      allowNull: false, // no permite que este vacio
      unique:true,//para q no se me repita el id
      primaryKey: true, //clave primaria

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.ENUM('Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar', ''),
      allowNull: false, 
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    region:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};
