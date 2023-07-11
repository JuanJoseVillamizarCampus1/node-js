import Empleado from "../models/Empleado.js";

const obtenerEmpleados= async (req,res) =>{
    const empleado = await Empleado.find();
    res.json(empleado)
}

export {obtenerEmpleados}