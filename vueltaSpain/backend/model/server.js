const express = require('express');
const {connectionDB} = require('../database/config.js');
const cors = require ('cors');
const {routes} = require('../routes/vuelta.routes.js')
class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.vueltaPath='/api/vueltaSpain';
        //middlewares
        this.middlewares()
        this.routes()
        this.connectDB()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    async connectDB (){
        await connectionDB()
    }
    //Rutas HTTP
    routes(){
        this.app.use(this.vueltaPath,routes)
    }
    //Creando metodo listen
    listen (){
        this.app.listen(this.port,()=>{
            console.log(`server is running on port ${this.port}`);
        })
    }
}
module.exports= {Server}