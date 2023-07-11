import mongoose from "mongoose";

const conectarDB = async ()=>{
    try {
        const conectionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology : true
        });
        const url = `Conectado a mongodb en server ${conectionDB.connection.host}- En puerto  ${conectionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1)
    }
};
export default conectarDB;