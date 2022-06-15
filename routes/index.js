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
    
    //Camionero
    router.get('/camionero', controlador.formulariocamionero)
    router.post('/camionero', controlador.nuevoCamionero)
    router.get('/ver-camioneros', controlador.verCamioneros)
    router.get('/borrarCamionero/:id', controlador.borrarCamionero)
    router.get('/editar-camionero/:id', controlador.editarCamionero)
    router.post('/editar-camionero/:id', controlador.actualizarCamionero)

    //Ciudad
    router.get('/ver-ciudades', controlador.verCiudades)
    
    //Paquete
    router.get('/paquete', controlador.formulariopaquete)
    router.post('/paquete', controlador.nuevoPaquete)
    router.get('/ver-paquetes', controlador.verPaquetes)
    router.get('/borrarPaquete/:id', controlador.borrarPaquete)
    router.get('/editar-paquete/:id', controlador.editarPaquete)
    router.post('/editar-paquete/:id', controlador.actualizarPaquete)

    //CamiCon
    router.get('/camicon', controlador.formularioCamicon)
    router.post('/camicon', controlador.nuevoCamicon)
    router.get('/ver-camicon', controlador.verCamicon)
    router.get('/borrarCamicon/:id', controlador.borrarCamicon)
    router.get('/editar-camicon/:id', controlador.editarCamicon)
    router.post('/editar-camicon/:id', controlador.actualizarCamicon)

    return router;
    
}