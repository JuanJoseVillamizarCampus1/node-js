import Cliente  from "../models/Cliente.js";

const obtenerClientes = async (req,res) =>{
    const cliente = await Cliente.find();
    res.json(cliente)
}
const obtenerCLiente= async (req,res)=>{
    const cliente= await Cliente.find({_id:req.params.id});
    res.json(cliente)
}
const crearCliente = async (req,res)=>{
    const cliente = new Cliente(req.body)
    try {
        const nuevoCliente = await cliente.save();
        res.json(nuevoCliente);
    } catch (error) {
        console.log(error);
    }
}
const borrarCliente = async (req,res)=>{
    try {
        await Cliente.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error:"CLiente no existe"})
    }
}
const actualizarCliente= async (req,res)=>{
    try {
        const cliente = await Cliente.findOne({_id:req.params.id})
        if (req.body.nombre) {
            cliente.nombre = req.body.nombre
        }
        if (req.body.apellido) {
            cliente.apellido = req.body.apellido
        }
        if (req.body.edad) {
            cliente.edad = req.body.edad
        }
        if (req.body.tel) {
            cliente.tel= req.body.tel
        }
        if (req.body.banco) {
            cliente.banco=req.body.banco
        }
        await cliente.save()
        res.send(cliente)
    } catch (error) {
        res.status(404)
        res.send({error:"Cliente no existe"})
    }
}

export {obtenerClientes,obtenerCLiente,crearCliente,borrarCliente,actualizarCliente};