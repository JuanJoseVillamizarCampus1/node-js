const { Schema, model } = require('mongoose');

const CheeseSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    precio :{
        type: Number,
        required: true
    },
   
    descripcion : {
        type: String,
        required: true
    },
    disponibilidad :{
        type : Boolean,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    categoria :{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }
});



module.exports = model( 'cheese', CheeseSchema );
