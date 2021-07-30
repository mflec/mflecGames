const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('videogame', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dateToRelase: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        local: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    })
}