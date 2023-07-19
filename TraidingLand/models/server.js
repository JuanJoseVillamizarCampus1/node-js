import express, { json } from "express";
import cors from "cors";
import conectarDB from "../config/config.js";
import routes from "../routes/acciones.routes.js"

export default class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.accionesPath="/api/acciones";
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    middlewares(){
        //CORS
        this.app.use(json());
        this.app.use(cors());
    }
    routes(){
        this.app.use(this.accionesPath,routes)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }
async conectarDB (){
    await conectarDB()
}
}
