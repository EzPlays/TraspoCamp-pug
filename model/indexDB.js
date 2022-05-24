const Conductor = require ('./Conductores');
const Empresa = require ('./Empresas');


Conductor.belongsTo(Empresa,{ foreignKey : "empresa_id"});
Empresa.hasMany(Conductor,{ foreignKey : "empresa_id"});


module.exports = {

    Conductor,
    Empresa,
    
}