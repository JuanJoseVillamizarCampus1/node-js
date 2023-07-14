import Acciones from "../models/acciones.js"

const getAcciones = async (req,res)=>{
    const acciones = await Acciones.find();
    console.log(acciones);
    res.json(acciones)
}
const addAcciones = async (req,res)=>{
    const acciones = new Acciones(req.body)
    try {
        const nuevaAccion = await acciones.save();
        res.json(nuevaAccion);
    }
     catch (error) {
        console.log(error);
     }
}
export {getAcciones,addAcciones}