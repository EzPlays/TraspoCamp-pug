const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize('transpocam', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});
  
try {
    db.authenticate();
    console.log('La conexion se haestablecido correctamente');
} catch {
    console.log('No ha sido posible la conexion con la base de datos');
}
module.exports = db;
