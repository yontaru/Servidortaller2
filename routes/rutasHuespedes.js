//TRAIGO EL METODO ROUTER DE EXPRESS PARA PERSONALIZAR MIS RUTAS
const { Router }= require('express');

//IMPORTAR(TRAER) LOS CONTROLADORES
const { buscarHuesped }= require('../controllers/controladorClientes.js');
const { agregarHuesped }= require('../controllers/controladorClientes.js');
const { editarHuesped }= require('../controllers/controladorClientes.js');
const { eliminarHuesped }= require('../controllers/controladorClientes.js');

//importar la validacion

const{validarPeticion}=require('../validations/validaciones.js');

//Importar el metodo CHECK del EXPRESS VALIDATOR

const{check}=require('express-validator');

//Crear la lista de validaciones (arreglo)

let validaciones=Array(

    check('nombre',"Este campo es obligatorio").not().isEmpty(),
    check('apellido',"Este campo es obligatorio").not().isEmpty(),
    check('telefono',"Este campo es obligatorio").not().isEmpty(),
    check('fechaInicioReserva',"Este campo es obligatorio").not().isEmpty(),
    check('fechaFinalReserva',"Este campo es obligatorio").not().isEmpty(),
    check('numeroPersonas',"Este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete',"Este campo es obligatorio").not().isEmpty(),
    validarPeticion

);

//PERSONALIZO MIS RUTAS:
const rutas=Router();


//LISTADO DE RURAS
rutas.get('/huespedes/:id',buscarHuesped);
rutas.post('/huesped/nuevo',validaciones,agregarHuesped);
rutas.put('/huesped/editar/:id',editarHuesped);
rutas.delete('/huesped/eliminar/:id',eliminarHuesped)


//EXPORTO LAS RUTAS
module.exports=rutas;
