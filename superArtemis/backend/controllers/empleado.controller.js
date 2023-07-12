import Empleado from "../models/Empleado.js";

const obtenerEmpleados= async (req,res) =>{
    const empleado = await Empleado.find();
    res.json(empleado)
}
const obtenerEmpleado = async (req,res) =>{
    const empleado = await Empleado.find({_id:req.params.id})
    res.json(empleado)
}
const nuevoEmpleado = async (req,res) =>{
    const empleado = new Empleado(req.body);
    try {
        const agregarEmpleado= await empleado.save();
        res.json(agregarEmpleado);

    } catch (error) {
        console.log(error);
    }
}
const borrarEmpleado = async (req,res) =>{
    try {
        await Empleado.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"Empleado no existe"})
    }
   
}
const actualizarEmpleado = async (req,res) =>{
    try {
        const empleado = await Empleado.findOne({_id:req.params.id})
        if (req.body.nombre) {
            empleado.nombre=req.body.nombre
        }
        if (req.body.Apellido) {
            empleado.Apellido=req.body.Apellido
        }
        if (req.body.tel) {
            empleado.tel=req.body.tel
        }
        if (req.body.gmail) {
            empleado.gmail=req.body.gmail
        }
        await empleado.save();
        res.send(empleado)
    } catch (error) {
        res.status(404);
        res.send({error:"Empleado no existe"})
    }
}

export {obtenerEmpleados,obtenerEmpleado,nuevoEmpleado,borrarEmpleado,actualizarEmpleado}