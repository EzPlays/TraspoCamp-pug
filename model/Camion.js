const {sequelize, DataTypes, Model} = require('sequelize')

const db = require('../config/connection');

const Camion = db.define('camion', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    potencia: DataTypes.STRING,
    tipo: DataTypes.STRING,
},
    {
        db,
        sequelize: db,
        modelName: 'Camion',
        tableName: 'camion'
    });


module.exports = Camion;
