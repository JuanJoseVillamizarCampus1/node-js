const Usuario = require('../models/Usuario.js');

const getUsers= (req,res)=>{
    res.json({"message":"home page"})
}
const postUsers= async (req,res)=>{
    try {
        const body= req.body;
    const usuario = new Usuario (body);
    await usuario.save()
    res.json({
        "message":"post api",usuario})
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}
const deleUsers=(req,res)=>{
    res.json({
        "message":"delete api"})
}
const addUsers=(req,res)=>{
    res.json({
        "message":"put api"})
}
const updateUsers=(req,res)=>{
    res.json({
        "message":"patch api"})
}
module.exports = {getUsers,postUsers,deleUsers,addUsers,updateUsers}