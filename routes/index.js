const express = require("express");
const router = express.Router();

//importamos el controlador
const controlador = require('../controllers/controlador');

module.exports = function () {

    //PRINCIPAL
    router.get('/', controlador.home);

    //Camion
    router.get('/camiones', controlador.formulariocamion)
    router.post('/camiones', controlador.nuevoCamion)
    router.get('/ver-camiones', controlador.verCamion)
    router.get('/borrarCamion/:id', controlador.borrarCamion)
    router.get('/editar-camion/:id', controlador.editarCamion)
    router.post('/editar-camion/:id', controlador.actualizarCamion)

    //CamiCon
    router.get('/CamiCon',)
    router.get('/asignar-camionero/:id',)
    router.post('/asignar-camionero',)
    
    //Camionero
    router.get('/camionero', controlador.formulariocamionero)
    router.post('/camionero', controlador.nuevoCamionero)
    router.get('/ver-camioneros', controlador.verCamioneros)
    router.get('/borrarCamionero/:id', controlador.borrarCamionero)
    router.get('/editar-camionero/:id', controlador.editarCamionero)
    router.post('/editar-camionero/:id', controlador.actualizarCamionero)

    //Ciudad
    router.get('/ciudad', controlador.formulariociudad)
    router.post('/ciudad', controlador.nuevaCiudad)
    router.get('/ver-ciudades', controlador.verCiudades)
    router.get('/borrarCiudad/:id', controlador.borrarCiudad)
    router.get('/editar-ciudad/:id', controlador.editarCiudad)
    router.post('/editar-ciudad/:id', controlador.actualizarCiudad)
    
    //Paquete
    router.get('/paquete', controlador.formulariopaquete)
    router.post('/paquete', controlador.nuevoPaquete)
    router.get('/ver-paquetes', controlador.verPaquetes)
    router.get('/borrarPaquete/:id', controlador.borrarPaquete)
    router.get('/editar-paquete/:id', controlador.editarPaquete)
    router.post('/editar-paquete/:id', controlador.actualizarPaquete)


    return router;
    
}