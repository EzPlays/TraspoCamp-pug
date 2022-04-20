const {sequelize, DataTypes, Model} = require('sequelize')

const db = require('../config/connection');

const Empresa = db.define('empresa', {

    id_empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_empresa: DataTypes.STRING,
    telefono_empresa: DataTypes.DOUBLE,
},
    {
        db,
        sequelize: db,
        modelName: 'Empresas',
        tableName: 'empresa'
    });


module.exports = Empresa;
