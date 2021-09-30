const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
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
    },
    { timestamps: false }
  );
};
