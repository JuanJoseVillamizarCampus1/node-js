import express from "express";
import {obtenerEmpleados} from "../controllers/empleado.controller.js"
const routerEmpleados = express.Router()

routerEmpleados.get("/all",obtenerEmpleados)

export default routerEmpleados;