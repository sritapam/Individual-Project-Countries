const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Spring", "Summer", "Autumn", "Winter"),
        allowNull: true,
      },
      createdInDb:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    },
    { timestamps: false }
  );
};
