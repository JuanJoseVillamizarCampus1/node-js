//1. importando express
import  express from "express";
import cors from "cors";
import getConnection from "../database/database.js";
import  routerDeparatamento from "../routes/departamento.routes.js";

class Server{

    constructor(){
        this.app=express();
        this.port = process.env.PORT
        this.heavensPath="/api/heavens";
        this.connectDB();
        this.middleware();
        this.routes();
    }
    async connectDB (){
        try {
            await getConnection()
        } catch (error) {
            console.log(error.message);
        }
       
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.heavensPath,routerDeparatamento)
    }
    listening(){
        this.app.listen(this.port,()=>{
            console.log(`Server is runing on port ${this.port}`);
        })
    }
}

export default Server;