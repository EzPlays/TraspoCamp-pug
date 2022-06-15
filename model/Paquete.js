// const Sequelize = require("sequelize");
const { Sequelize, DataTypes, Model } = require('sequelize');

const db = require('../config/connection');

const Paquete = db.define('paquete', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    destinatario: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    direccion: DataTypes.STRING,
    camionero_id: {
        type : DataTypes.INTEGER, // LLAVE FORANEA DE EMPRESA
    },
    ciudad_id: {
        type : DataTypes.INTEGER, // LLAVE FORANEA DE EMPRESA
    }
},
    {
        db,
        sequelize: db,
        modelName: 'Paquete',
        tableName: 'paquete'
    });

    module.exports = Paquete;
