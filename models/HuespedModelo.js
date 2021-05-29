//traigo de mongoose el model y Schema de datos

const{model, Schema}=require('mongoose');

//Crear el esqueleto que va a tener cada documento de la coleccioón
const HuespedEsquema=Schema({

    nombre:{
        type:String,
        required:true,

    },

    apellido:{
        type:String,
        required:true,
    },

    telefono:{
        type:String,
        required:true
    },

    fechaInicioReserva:{
        type:String,
        required:true,

    },

    fechaFinalReserva:{
        type:String,
        required:true,

    },

    numeroPersonas:{
        type:String,
        required:true,
    },

    tipoPaquete:{
        type:String,
        required:true,
    }

});

module.exports=model('Huesped',HuespedEsquema);