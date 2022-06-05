// const Sequelize = require("sequelize");
const { Sequelize, DataTypes, Model } = require('sequelize');

const db = require('../config/connection');

const Ciudad = db.define('ciudad', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING,
    paquete_id: {
        type : DataTypes.INTEGER.UNSIGNED, // LLAVE FORANEA DE EMPRESA
        allowNull : false
    }
    
},
    {
        db,
        sequelize: db,
        modelName: 'Ciudad',
        tableName: 'ciudad'
    });

    module.exports = Ciudad;


