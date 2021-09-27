const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM('Spring', 'Summer','Autumn', 'Winter'),
            allowNull: true,
        },

    })
}