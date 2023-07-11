import express from "express";
import {obtenerProductos} from "../controllers/productosd.controllers.js"
const routesProductos = express.Router()

routesProductos.get("/all",obtenerProductos);



export default routesProductos;