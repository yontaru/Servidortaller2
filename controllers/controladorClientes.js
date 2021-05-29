//Importar de express las varibles rquest y response
const { request,response }=require('express');

//Importar el modelo de datos del API

const HuespedModelo=require('../models/HuespedModelo.js');

//SE CREAN FUNCIONES PARA CADA UNO DE LOS SERVICIOS QUE PRESTARÁ EL API
//(EL MENÚ DEL RESTAURANTE)

async function buscarHuesped(peticion=request,respuesta=response){

    let id=peticion.params.id;
    
    let datosconsultados=await HuespedModelo.findById(id);

    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });

    
}

async function agregarHuesped(peticion=request,respuesta=response){

    let datosHuesped=peticion.body;

    let huesped=new HuespedModelo(datosHuesped);
    await huesped.save();


    respuesta.json({
        estado:true,
        mensaje:'Huesped de tipo POST',
        datos:huesped        
    });

}

async function editarHuesped(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosHuesped=peticion.body;

    await HuespedModelo.findByIdAndUpdate(id,datosHuesped)

    respuesta.json({
        estado:true,
        mensaje:'Huesped actualizado correctamente'
    });

}

async function eliminarHuesped(peticion=request,respuesta=response){

    let id=peticion.params.id;

    await HuespedModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Huesped eliminado correctamente'
    });

}


//EXPORTO(ENVIO) TODAS LAS FUNCIONES HACIA EL ARCHIVO DE RUTAS
module.exports={
    buscarHuesped,
    agregarHuesped,
    editarHuesped,
    eliminarHuesped
}