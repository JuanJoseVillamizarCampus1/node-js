const Cheese = require('../models/Cheese.js')

const postCheese = async(req, res ) => {
    const {nombre,precio,descripcion,disponibilidad}= req.body
    const cheeseDB = await Cheese.findOne({ nombre });
    if ( cheeseDB ) {
        return res.status(400).json({
            msg: `El queso ${ cheeseDB.nombre }, ya existe`
        });
    }
    Cheese.find(query).populate('usuario', 'nombre')
    Categoria.find(query).populate('usuario', ['nombre', 'email'])
    const data = {
        nombre,
        precio,
        descripcion,
        disponibilidad,
        usuario: req.usuario._id,
        categoria: req.categoria._id
    }    
    const cheese = new Cheese( data );
    // Guardar DB
    await cheese.save();
    res.status(201).json(cheese);
}

module.exports={
    postCheese
}