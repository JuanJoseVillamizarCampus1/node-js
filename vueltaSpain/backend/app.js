const {Server} = require('./model/server.js');

const dotenv = require('dotenv');

//Accediento a las variables de entorno
dotenv.config()

//Instanciando la clase Server
const server = new Server()
server.listen()