import Producto from "../models/Producto.js";

const obtenerProductos = async (req,res) =>{
    const producto = await Producto.find();
    res.json(producto);
}
const obtenerProducto = async (req,res) =>{
    const producto = await Producto.findOne({_id:req.params.id});
    res.json(producto);
}
const agregarProducto = async(req,res)=>{
    const producto = Producto(req.body);
    try {
        const agregarProducto= await producto.save()
        res.json(agregarProducto)
    } catch (error) {
        console.log(error);
    }
}
const borrarProducto = async (req,res)=>{
    try {
        await Producto.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404);
        res.send({error:"Producto no existe"})
    }
}
const actualizarProducto = async (req,res)=>{
    try {
        const producto = await Producto.findOne({_id:req.params.id})
        if (req.body.nombre) {
            producto.nombre=req.body.nombre
        }
        if (req.body.marca) {
            producto.marca=req.body.marca
        }
        if (req.body.precio) {
            producto.precio=req.body.precio
        }
        await producto.save()
        res.send(producto)
    } catch (error) {
        res.status(404).send()
        res.send({error:"Producto no existe"})
    }
}
export {obtenerProductos,obtenerProducto,agregarProducto,borrarProducto,actualizarProducto};