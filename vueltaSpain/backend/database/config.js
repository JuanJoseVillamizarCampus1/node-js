const mongoose = require('mongoose');

const OPTIONS = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const connectionDB = async()=>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI,OPTIONS);
        console.log(`Conectado a la base de datos con el HOST: ${connectDB.connection.host} y el PUERTO: ${connectDB.connection.port}`);
    } catch (error) {
        console.log('Error conexion fallida:',error.message);
    }
    
}

module.exports={connectionDB}