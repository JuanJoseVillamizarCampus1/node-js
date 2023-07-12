import express from "express";
import {obtenerEmpleados,obtenerEmpleado,nuevoEmpleado,borrarEmpleado,actualizarEmpleado} from "../controllers/empleado.controller.js"
const routerEmpleados = express.Router()

routerEmpleados.get("/all",obtenerEmpleados);
routerEmpleados.get("/:id",obtenerEmpleado);
routerEmpleados.post("/add",nuevoEmpleado);
routerEmpleados.delete("/del/:id",borrarEmpleado);
routerEmpleados.patch("/upd/:id",actualizarEmpleado)

export default routerEmpleados;