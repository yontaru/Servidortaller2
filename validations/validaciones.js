// importa la funcón de validación
const { body, validationResult } = require('express-validator');

//Importar de express las varibles rquest y response
const { request,response }=require('express');


function validarPeticion(peticion=request,respuesta=response,next){

    let errores=validationResult(peticion)

    if(!errores.isEmpty())
    {
        return(respuesta.status(400).json(errores));

    }

    next();

}

module.exports={validarPeticion}