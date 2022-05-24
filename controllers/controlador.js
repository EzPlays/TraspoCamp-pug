const { response } = require("express");
const Empresas = require('../model/Empresas');
const Conductores = require('../model/Conductores');
const {Conductor,Empresa} = require('../model/indexDB');



exports.home = (req, res) => {
    res.render('index', {
        nombrePagina : 'MoviMaps'
    });
} 

    const getConductor = async (req, res = response) => {

        try {
        
            const conductor = await Conductor.findAll({
                include: {
                    model: Empresa,
                    attributes: ['nombre_empresa', 'telefono_empresa']
                }
            });

            res.json({
                msg: "todo OK",
                conductor
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "error backend",
                at: "getConductor"
            });
        }
    }

    exports.verConductores = async (req, res) => {
    
        const conductores = await Conductores.findAll({

        });

        res.render('verConductor', {
            nombrePagina: 'Lista de Conductores',
            conductores
        })
    }

    exports.formularioProyecto = (req, res) => {
        res.render('nuevoConductor', {
            nombrePagina: 'Nuevo Conductor'
        })
    }

    exports.nuevoConductor = async (req, res) => {
        //Enviar a consola lo que el usuario escriba
        const { nombre_conductor } = req.body;
        const { apellido_conductor } = req.body;
        const { num_celular_conductor } = req.body;
        const { correo_conductor } = req.body;
        const { empresa_id } = req.body;

        let errores = [];

        if (!nombre_conductor) {
            errores.push({ 'texto': 'Agregar un numero de identificacion' })
        }
        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoConductor', {
                nombrePagina: 'nuevo Conductor',
                errores
            })
        } else {
            const conductor = await Conductores.create({
                nombre_conductor: { nombre_conductor }.nombre_conductor,
                apellido_conductor: { apellido_conductor }.apellido_conductor,
                num_celular_conductor: { num_celular_conductor }.num_celular_conductor,
                correo_conductor: { correo_conductor }.correo_conductor,
                empresa_id: { empresa_id }.empresa_id,
            });
            res.redirect('/ver-conductores');
        }
    }

    exports.borrarConductor = async (req, res) => {
        try {
            const idconductor = req.params.id;
            const borrarConductor = await Conductores.destroy({ where: { idconductor } })
            console.log('Conductor borrada correctamente');
            res.redirect('/ver-conductores')
        }
        catch (err) {
            console.log('Error al intentar borrar Empresa');
            res.redirect('/ver-conductores')
        }
    }

    exports.editarConductor = async (req, res, next) => {
        const idconductor = req.params.id;
        const conductorEditar = await Conductores.findOne({
            where: {
                idconductor: idconductor
            }
        });
        res.render('editarConductor', {
            nombrePagina: 'Editar Conductor',
            conductorEditar
        })
    }

    exports.actualizarConductor = async (req, res, next) => {
        const idconductor = req.params.id;
        const nombre_conductor = req.body.nombre_conductor;
        const apellido_conductor = req.body.apellido_conductor;
        const num_celular_conductor = req.body.num_celular_conductor;
        const correo_conductor = req.body.correo_conductor;
        const empresa_id = req.body.empresa_id;


        let errores = [];

        if (!nombre_conductor) {
            errores.push({ 'texto': 'Agregar un nombre a la empresa' })
        }

        //si hay errores
        if (errores.length > 0) {
            res.render('nuevoConductor', {
                nombrePagina: 'nuevo Conductor',
                errores
            })
        } else {
            try {
                await Conductores.update({
                    nombre_conductor: nombre_conductor,
                    apellido_conductor: apellido_conductor,
                    num_celular_conductor: num_celular_conductor,
                    correo_conductor: correo_conductor,
                    empresa_id: empresa_id,
                },
                    {
                        where: {
                            idconductor: idconductor
                        }
                    });
                console.log("Conductor actualizado correctamente");
                res.redirect('/ver-conductores');
            }
            catch (err) {
                console.log("error al intentar actualizar conductor");
                res.redirect("/ver-conductores")
            }
        }
    }

    //**empresa */

    exports.formularioNuevaEmpresa = (req, res) => {
        res.render('nuevaEmpresa', {
            nombrePagina: 'Nueva Empresa'
        })
    }

    exports.verEmpresa = async (req, res) => {
        const empresas = await Empresas.findAll();

        res.render('verEmpresa', {
            nombrePagina: 'Lista de Empresas',
            empresas
        })
        console.log(empresas.length);
    }

    exports.nuevaEmpresa = async (req, res) => {
        //Enviar a consola lo que el usuario escriba
        const { nombre_empresa } = req.body;
        const { telefono_empresa } = req.body;
        let errores = [];

        if (!nombre_empresa) {
            errores.push({ 'texto': 'Agregar un numero de identificacion' })
        }
        //si hay errores
        if (errores.length > 0) {
            res.render('nuevaEmpresa', {
                nombrePagina: 'nueva Empresa',
                errores
            })
        } else {
            const empresa = await Empresas.create({
                nombre_empresa: { nombre_empresa }.nombre_empresa,
                telefono_empresa: { telefono_empresa }.telefono_empresa,
            });
            res.redirect('/ver-empresa');
        }
    }

    exports.borrarEmpresa = async (req, res) => {
        try {
            const id_empresa = req.params.id;
            const borrarEmpresa = await Empresas.destroy({ where: { id_empresa } })
            console.log('Empresa borrada correctamente');
            res.redirect('/ver-empresa')
        }
        catch (err) {
            console.log('Error al intentar borrar Empresa');
            res.redirect('/ver-empresa')
        }
    }

    exports.editarEmpresa = async (req, res, next) => {
        const id_empresa = req.params.id;
        const empresaEditar = await Empresas.findOne({
            where: {
                id_empresa: id_empresa
            }
        });
        res.render('editarEmpresa', {
            nombrePagina: 'Editar Empresa',
            empresaEditar
        })
    }

    exports.actualizarEmpresa = async (req, res, next) => {
        const id_empresa = req.params.id;
        const nombre_empresa = req.body.nombre_empresa;
        const telefono_empresa = req.body.telefono_empresa;

        let errores = [];

        if (!nombre_empresa) {
            errores.push({ 'texto': 'Agregar un nombre a la empresa' })
        }

        //si hay errores
        if (errores.length > 0) {
            res.render('nuevaEmpresa', {
                nombrePagina: 'nueva Empresa',
                errores
            })
        } else {
            try {
                await Empresas.update({
                    nombre_empresa: nombre_empresa,
                    telefono_empresa: telefono_empresa
                },
                    {
                        where: {
                            id_empresa: id_empresa
                        }
                    });
                console.log("Empresa actualizado correctamente");
                res.redirect('/ver-empresa');
            }
            catch (err) {
                console.log("error al intentar actualizar Empresa");
                res.redirect("/ver-empresa")
            }
        }
    }
