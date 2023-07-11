import mongoose from "mongoose";

//Creando Objeto

const clienteSchema= mongoose.Schema(
    {
        nombre : {
            type:String,
            required : true,
            trim: true
        },
        apellido : {
            type:String,
            required : true,
            trim: true
        },
        edad : {
            type:Number,
            required : true,
            trim: true
        },
        tel : {
            type:Number,
            required : true,
            trim: true
        },
        banco : {
            type:String,
            required : true,
            trim: true
        }

    },
    {
        timestamps: true  
      }
);

const Cliente = mongoose.model("Cliente",clienteSchema)

export default Cliente;