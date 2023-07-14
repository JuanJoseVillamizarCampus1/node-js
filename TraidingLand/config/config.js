import mongoose from "mongoose"

const conectarDB= async()=>{
        try {
            const conection = await mongoose.connect(process.env.MONGO_URI,{
                UseNewUrlParser: true,
                useUnifiedTopology : true
            });
            const url = `Conectado a mongodb ${conection.connection.host}-en el Puerto: ${conection.connection.port}`
        } catch (error) {
            console.log(`${error.message}`);
            process.exit(1)
        }
}

export default conectarDB;