// const Sequelize = require("sequelize");
const { Sequelize, DataTypes, Model } = require('sequelize');

const db = require('../config/connection');

const CamiCon = db.define('camicon', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    camion_id: {
        type : DataTypes.INTEGER, // LLAVE FORANEA DE EMPRESA
        allowNull : false
    },
    camionero_id: {
        type : DataTypes.INTEGER, // LLAVE FORANEA DE EMPRESA
        allowNull : false
    }
    
},
    {
        db,
        sequelize: db,
        modelName: 'CamiCon',
        tableName: 'camicon'
    });

    module.exports = CamiCon;