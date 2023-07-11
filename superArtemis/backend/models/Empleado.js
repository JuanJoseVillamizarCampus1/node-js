//1. importar mongoose
import mongoose from "mongoose";

//2. Crear nuestro esquema objeto

const empleadoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true,
        trim:true
    },
    apellido:{
        type:String,
        required: true,
        trim: true
    },
    tel:{
        type: Number,
        required: true,
        trim: true
    },
    gmail:{
        type: String,
        required:true,
        trim:true
    }   
},{
    timestamps: true
}
)
//Crear objeto
const Empleado = mongoose.model("empleado",empleadoSchema)

export default Empleado;