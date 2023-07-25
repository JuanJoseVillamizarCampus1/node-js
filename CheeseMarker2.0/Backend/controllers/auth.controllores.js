const {response} = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/Usuario.js');
const login =  async (req,res=response)=>{
    const {email, password}= req.body

    try {
        //Verificar el email en database
        const existeEmail = await Usuario.findOne({email});
        if (!existeEmail) {
            return res.status(400).json({error:"Email no resgritado"})
        }
        //Verificar que el usuario este activo
        if (existeEmail.estado===false) {
            return res.status(400).json({error:"El usuario no esta activo"})
        }
        //verificar si el password es correcto y conincide con la llave
        const passwordCorrecta = bcryptjs.compareSync(password,existeEmail.password)
        if (!passwordCorrecta) {
            return res.status(400).json({error:"El password no es correcto"})
        }
        res.json({
            msg:"Ok todo bien"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"Datos insuficiente."
        })
    }
   
}

module.exports = {
    login
}