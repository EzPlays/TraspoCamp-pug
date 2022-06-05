const {sequelize, DataTypes, Model} = require('sequelize')

const db = require('../config/connection');

const Camionero = db.define('camionero', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
},
    {
        db,
        sequelize: db,
        modelName: 'Camionero',
        tableName: 'camionero'
    });


module.exports = Camionero;
