const Categoria  = require('../models/Categoria.js');  

const postCategoria = async(req, res ) => {
    const nombre = req.body.nombre.toUpperCase();
    const categoriaDB = await Categoria.findOne({ nombre });
    if ( categoriaDB ) {
        return res.status(400).json({
            msg: `La categoria ${ categoriaDB.nombre }, ya existe`
        });
    }
   /*  console.log("usuario:",usuario); */
    // Generar la data a guardar
    const data = {
        nombre,
        usuario: req.usuario._id
    }    
    const categoria = new Categoria( data );
    // Guardar DB
    await categoria.save();
    res.status(201).json(categoria);
    Cheese.find(query)
.populate('usuario','nombre')
};
const getCategorias = async (req,res) =>{
    const { hasta, desde } = req.query;
    const query = { estado: true };

    const [ total, categoria ] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        categoria
    });
};
const getCategoria = async(req,res)=>{
    const categoria = await Categoria.findOne({_id:req.params.id});
    res.json(categoria);
};

const deleteCategoria = async(req,res)=>{
    const {id} = req.params
    const categoria = await Categoria.findByIdAndUpdate( id, { estado: false } );
    res.json(categoria)
}
const putCategoria = async(req,res)=>{
    try {
        const categoria= await Categoria.findOne({_id:req.params.id})
        if (req.body.nombre) {
            categoria.nombre = req.body.nombre
        }
        if (req.body.estado) {
            categoria.estado = req.body.estado
        }
        await categoria.save()
        res.send(categoria)
    } catch (error) {
        res.status(404)
        res.send({error:"Categoria no existe"})
    }
}
module.exports = {
    postCategoria,
    getCategorias,
    getCategoria,
    deleteCategoria,
    putCategoria
 
}