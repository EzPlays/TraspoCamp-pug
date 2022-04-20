const Empresas = require('../model/Empresas');
const Conductores = require('../model/Conductores');

exports.home = (req, res) => {
    res.render('index', {
        nombrePagina : 'MoviMaps'
    });
} 

exports.verConductores = async (req, res) => {
    const conductores = await Conductores.findAll();

    res.render('Conductores', {
        nombrePagina: 'Lista de Conductores',
        conductores
    })
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoConductor', {
        nombrePagina : 'Nuevo Conductor'
    })
}


exports.nuevoConductor = async(req, res) => {
    //Enviar a consola lo que el usuario escriba
    const { idconductor } = req.body;
    const { nombre_conductor } = req.body;
    const { apellido_conductor } = req.body;
    const { num_celular_conductor } = req.body;
    const { correo_conductor } = req.body;
    const { contraseña_conductor } = req.body;
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
            idconductor: { idconductor }.idconductor,
            nombre_conductor: { nombre_conductor }.nombre_conductor,
            apellido_conductor: { apellido_conductor }.apellido_conductor,
            num_celular_conductor: { num_celular_conductor }.num_celular_conductor,
            correo_conductor: { correo_conductor }.correo_conductor,
            contraseña_conductor: { contraseña_conductor }.contraseña_conductor
        });
        res.redirect('/Conductores');
    }
}

//**empresa */

exports.formularioNuevaEmpresa = (req, res) => {
    res.render('nuevaEmpresa', {
        nombrePagina : 'Nueva Empresa'
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
exports.nuevaEmpresa = async(req, res) => {
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
        const borrarEmpresa = await Empresas.destroy({where:{id_empresa}})
        console.log('Empresa borrada correctamente');
        res.redirect('/ver-empresa')
    }
    catch (err) {
        console.log('Error al intentar borrar Empresa');
        res.redirect('/ver-empresa')
    }
}

exports.editarEmpresa = async(req, res, next) => {
    const id_empresa = req.params.id;
        const empresaEditar = await Empresas.findOne({
            where: {
                id_empresa : id_empresa
            }
        });
        res.render('editarEmpresa', {
            nombrePagina : 'Editar Empresa',
            empresaEditar
        })
}

exports.actualizarEmpresa = async(req, res, next) => {
    const id_empresa = req.params.id;
    const nombre_empresa = req.body.nombre_empresa;
    const telefono_empresa = req.body.telefono_empresa;

    let errores = [];

    if (!nombre_empresa) {
        errores.push({'texto': 'Agregar un nombre a la empresa'})
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
                    id_empresa : id_empresa
                }
            });
                console.log("Empresa actualizado correctamente");
                res.redirect('/ver-empresa');  
        }
        catch(err){
            console.log("error al intentar actualizar Empresa");
            res.redirect("/ver-empresa")
        }
    }
}



