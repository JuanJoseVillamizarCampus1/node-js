import express from "express";
import {obtenerClientes,obtenerCLiente,crearCliente,borrarCliente,actualizarCliente} from "../controllers/cliente.controllers.js"
const routerCliente = express.Router()

routerCliente.get("/all",obtenerClientes);
routerCliente.get("/:id",obtenerCLiente);
routerCliente.post("/add",crearCliente);
routerCliente.delete("/del/:id",borrarCliente);
routerCliente.patch("/upd/:id",actualizarCliente)

export default routerCliente;