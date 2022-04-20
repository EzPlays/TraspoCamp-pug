const express = require("express");
const routes = require("./routes");
const path = require('path');
const bodyParser = require('body-parser');

//crea una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar PUG
app.set('view engine', 'pug')

//añadir la carpeta de vistas
app.set('views', path.join(__dirname, './views'));

//habilitar bodyPaser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes())

//le decimos en que puerto va a escuchar
app.listen(3000)