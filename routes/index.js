const express = require("express");
const router = express.Router();

//importamos el controlador
const controlador = require('../controllers/controlador');

module.exports = function () {

    //PRINCIPAL
    router.get('/', controlador.home);
    
    //CONDUCTOR
    router.get('/nuevo-conductor', controlador.formularioProyecto)
    router.post('/nuevo-conductor', controlador.nuevoConductor)
    router.get('/ver-conductores', controlador.verConductores)

    router.get('/borrar-conductor/:id', controlador.borrarConductor)
    router.get('/editar-conductor/:id', controlador.editarConductor)
    router.post('/editar-conductor/:id', controlador.actualizarConductor)

    //EMPRESA
    router.get('/nueva-empresa', controlador.formularioNuevaEmpresa)
    router.post('/nueva-empresa', controlador.nuevaEmpresa)
    router.get('/ver-empresa', controlador.verEmpresa)

    router.get('/borrar-empresas/:id', controlador.borrarEmpresa)
    router.get('/editar-empresas/:id', controlador.editarEmpresa)
    router.post('/editar-empresas/:id', controlador.actualizarEmpresa)



    return router;
    
}