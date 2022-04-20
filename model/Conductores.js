// const Sequelize = require("sequelize");
const { Sequelize, DataTypes, Model } = require('sequelize');

const db = require('../config/connection');

const Conductor = db.define('conductor', {

    idconductor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_conductor: DataTypes.STRING,
    apellido_conductor: DataTypes.STRING,
    num_celular_conductor: DataTypes.DOUBLE,
    correo_conductor: DataTypes.STRING,
    contraseña_conductor: DataTypes.STRING,
},
    {
        db,
        sequelize: db,
        modelName: 'Conductores',
        tableName: 'conductor'
    });

    module.exports = Conductor;


