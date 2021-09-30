const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    
    alpha3Code:{
      type: DataTypes.STRING(3),
      allowNull: false, // no permite que este vacio
      primaryKey: true, //clave primaria

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '---',
    },
    flags:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '---',
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '---',
    },
    region:{
      type: DataTypes.STRING,
      defaultValue: '---',
    },
    area:{
      type: DataTypes.DECIMAL,
      allowNull: true,
      
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  { timestamps: false },
  );
};
