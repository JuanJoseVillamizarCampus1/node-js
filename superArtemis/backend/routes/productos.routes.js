import express from "express";
import {obtenerProductos,obtenerProducto,agregarProducto,borrarProducto,actualizarProducto} from "../controllers/productosd.controllers.js"
const routesProductos = express.Router()

routesProductos.get("/all",obtenerProductos);
routesProductos.get("/:id",obtenerProducto);
routesProductos.post("/add",agregarProducto);
routesProductos.delete("/del/:id",borrarProducto);
routesProductos.patch("/upd/:id",actualizarProducto)

export default routesProductos;