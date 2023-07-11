import mongoose from "mongoose";

const productosSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim:true
    },
    marca:{
        type:String,
        required:true,
        trim :true
    },
    precio:{
        type:Number,
        required:true,
        trim: true
    }
},{
    timestamps: true
})

const Producto = mongoose.model("Producto",productosSchema)

export default Producto;