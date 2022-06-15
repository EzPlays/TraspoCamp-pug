const Camion = require('../model/Camion');
const Camionero = require('../model/Camionero');
const Ciudad = require('../model/Ciudad');
const Paquete = require('../model/Paquete');
const CamiCon = require('../model/CamiCon');



    exports.home = (req, res) => {
        res.render('index', {
            nombrePagina : 'TransCam'
        });
    }


    //CamiCon
    exports.asignarCamionero = async(req, res) => {
        const id = req.params.id;
        const asignarCamioneroCamion = await Camion.findAll({
            where: {
                
            }
        })
    }


    //camion

    exports.formulariocamion = (req, res) => {
        res.render('nuevoCamion', {
            nombrePagina: 'nuevo camion'
        })
    }

    exports.verCamion = async (req, res) => {
        const camion = await Camion.findAll();

        res.render('verCamiones', {
            nombrePagina: 'Lista de Camiones',
            camion
        })
        console.log(camion.length);
    }

    exports.nuevoCamion = async (req, res) => {
        //Enviar a consola lo que el usuario escriba
        const { placa } = req.body;
        const { modelo } = req.body;
        const { potencia } = req.body;
        const { tipo } = req.body;
        let errores = [];

        if (!placa) {
            errores.push({ 'texto': 'Agregar un numero de identificacion' })
        }
        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoCamion', {
                nombrePagina: 'nuevo Camion',
                errores
            })
        } else {
            const camion = await Camion.create({
                placa: { placa }.placa,
                modelo: { modelo }.modelo,
                potencia: { potencia }.potencia,
                tipo: { tipo }.tipo
            });
            res.redirect('/ver-camiones');
        }
    }

    exports.borrarCamion = async (req, res) => {
        try {
            const id = req.params.id;
            const borrarCamion = await Camion.destroy({ where: { id } })
            console.log('Camion borrado correctamente');
            res.redirect('/ver-camiones')
        }
        catch (err) {
            console.log('Error al intentar borrar Camion');
            res.redirect('/ver-camiones')
        }
    }

    exports.editarCamion = async (req, res, next) => {
        const id = req.params.id;
        const Editarcamion = await Camion.findOne({
            where: {
                id: id
            }
        });
        res.render('editarCamion', {
            nombrePagina: 'Editar Camion',
            Editarcamion
        })
    }

    exports.actualizarCamion = async (req, res, next) => {
        const id = req.params.id;
        const placa = req.body.placa;
        const modelo = req.body.modelo;
        const potencia = req.body.potencia;
        const tipo = req.body.tipo;

        let errores = [];

        if (!placa) {
            errores.push({ 'texto': 'Agregar un nombre a la empresa' })
        }

        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoCamion', {
                nombrePagina: 'nuevo Camion',
                errores
            })
        } else {
            try {
                await Camion.update({
                    placa: placa,
                    modelo: modelo,
                    potencia: potencia,
                    tipo: tipo
                },
                    {
                        where: {
                            id: id
                        }
                    });
                console.log("Camion actualizado correctamente");
                res.redirect('/ver-camiones');
            }
            catch (err) {
                console.log("error al intentar actualizar Camion");
                res.redirect("/ver-camiones")
            }
        }
    }

    ////////////////////////////////////////////////////////////////

    //camionero

    exports.formulariocamionero = (req, res) => {
        res.render('nuevoCamionero', {
            nombrePagina: 'nuevo camionero'
        })
    }

    exports.verCamioneros = async (req, res) => {
        const camionero = await Camionero.findAll();

        res.render('verCamioneros', {
            nombrePagina: 'Lista de Camioneros',
            camionero
        })
        console.log(camionero.length);
    }

    exports.nuevoCamionero = async (req, res) => {
        //Enviar a consola lo que el usuario escriba
        const { nombre } = req.body;
        const { telefono } = req.body;
        const { direccion } = req.body;
        let errores = [];

        if (!nombre) {
            errores.push({ 'texto': 'Agregar un numero de identificacion' })
        }
        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoCamionero', {
                nombrePagina: 'nuevo Camionero',
                errores
            })
        } else {
            const camionero = await Camionero.create({
                nombre: { nombre }.nombre,
                telefono: { telefono }.telefono,
                direccion: { direccion }.direccion
            });
            res.redirect('/ver-camioneros');
        }
    }

    exports.borrarCamionero = async (req, res) => {
        try {
            const id = req.params.id;
            const borrarCamionero = await Camionero.destroy({ where: { id } })
            console.log('Camionero borrado correctamente');
            res.redirect('/ver-camioneros')
        }
        catch (err) {
            console.log('Error al intentar borrar Camionero');
            res.redirect('/ver-camioneros')
        }
    }

    exports.editarCamionero = async (req, res, next) => {
        const id = req.params.id;
        const Editarcamionero = await Camionero.findOne({
            where: {
                id: id
            }
        });
        res.render('editarCamionero', {
            nombrePagina: 'Editar Camionero',
            Editarcamionero
        })
    }

    exports.actualizarCamionero = async (req, res, next) => {
        const id = req.params.id;
        const nombre = req.body.nombre;
        const telefono = req.body.telefono;
        const direccion = req.body.direccion;

        let errores = [];

        if (!nombre) {
            errores.push({ 'texto': 'Agregar un nombre a la empresa' })
        }

        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoCamionero', {
                nombrePagina: 'nuevo Camionero',
                errores
            })
        } else {
            try {
                await Camionero.update({
                    nombre: nombre,
                    telefono: telefono,
                    direccion: direccion,
                },
                    {
                        where: {
                            id: id
                        }
                    });
                console.log("Camionero actualizado correctamente");
                res.redirect('/ver-camioneros');
            }
            catch (err) {
                console.log("error al intentar actualizar Camionero");
                res.redirect("/ver-camioneros")
            }
        }
    }

    ////////////////////////////////////////////////////////////////

    //Ciudad

    exports.verCiudades = async (req, res) => {
        const ciudades = await Ciudad.findAll();

        res.render('verCiudades', {
            nombrePagina: 'Lista de Ciudades',
            ciudades
        })
        console.log(ciudades.length);
    }

    ////////////////////////    

    //Paquete

    exports.formulariopaquete = async(req, res) => {
        const ciudades = await Ciudad.findAll();
        const camioneros = await Camionero.findAll();

        res.render('nuevoPaquete', {
            nombrePagina: 'nuevo Paquete',
            ciudades,
            camioneros
        })
    }

    exports.verPaquetes = async (req, res) => {
        const paquetes = await Paquete.findAll();
        const ciudades = await Ciudad.findAll();
        const camioneros = await Camionero.findAll();

        res.render('verPaquetes', {
            nombrePagina: 'Lista de Paquetes',
            paquetes,
            ciudades,
            camioneros
        })
        console.log(paquetes.length);
    }

    exports.nuevoPaquete = async (req, res) => {
        //Enviar a consola lo que el usuario escriba
        const { destinatario } = req.body;
        const { descripcion } = req.body;
        const { direccion } = req.body;
        const { camionero_id } = req.body;
        const { ciudad_id } = req.body;

        let errores = [];

        if (!destinatario) {
            errores.push({ 'texto': 'Agregar un numero de identificacion' })
        }
        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoPaquete', {
                nombrePagina: 'nuevo Paquete',
                errores
            })
        } else {
            const paquete = await Paquete.create({
                destinatario: { destinatario }.destinatario,
                descripcion: { descripcion }.descripcion,
                direccion: { direccion }.direccion,
                camionero_id: { camionero_id }.camionero_id,
                ciudad_id: { ciudad_id }.ciudad_id,
            });
            res.redirect('/ver-paquetes');
        }
    }

    exports.borrarPaquete = async (req, res) => {
        try {
            const id = req.params.id;
            const borrarPaqute = await Paquete.destroy({ where: { id } })
            console.log('Paquete borrado correctamente');
            res.redirect('/ver-paquetes')
        }
        catch (err) {
            console.log('Error al intentar borrar Paquete');
            res.redirect('/ver-paquetes')
        }
    }

    exports.editarPaquete = async (req, res, next) => {
        const id = req.params.id;
        const ciudades = await Ciudad.findAll();
        const camioneros = await Camionero.findAll();
        const Editarpaquete = await Paquete.findOne({
            where: {
                id: id
            }
        });
        res.render('editarPaquete', {
            nombrePagina: 'Editar paquete',
            ciudades,
            camioneros,
            Editarpaquete
        })
    }

    exports.actualizarPaquete = async (req, res, next) => {
        const id = req.params.id;
        const destinatario = req.body.destinatario;
        const descripcion = req.body.descripcion;
        const direccion = req.body.direccion;
        const camionero_id = req.body.camionero_id;
        const ciudad_id = req.body.ciudad_id;

        let errores = [];

        if (!destinatario) {
            errores.push({ 'texto': 'Agregar un nombre a la empresa' })
        }

        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoPaquete', {
                nombrePagina: 'nuevo Paquete',
                errores
            })
        } else {
            try {
                await Paquete.update({
                    destinatario: destinatario,
                    descripcion: descripcion,
                    direccion: direccion,
                    camionero_id: camionero_id,
                    ciudad_id: ciudad_id
                },
                    {
                        where: {
                            id: id
                        }
                    });
                console.log("Paquete actualizado correctamente");
                res.redirect('/ver-paquetes');
            }
            catch (err) {
                console.log("error al intentar actualizar Ciudad");
                res.redirect("/ver-paquetes")
            }
        }
    }
