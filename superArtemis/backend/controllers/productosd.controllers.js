import Producto from "../models/Producto.js";

const obtenerProductos = async (req,res) =>{
    const producto = await Producto.find();
    res.json(producto);
}
export {obtenerProductos};