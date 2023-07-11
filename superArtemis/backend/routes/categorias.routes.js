import express from "express";
import {obtenerCategorias,agregarCategoria,borrarCategoria,actualizarCategoria,obtenerCategoria} from "../controllers/categoria.controller.js";

const router = express.Router()
router.get("/all",obtenerCategorias);
router.get("/:id",obtenerCategoria)
router.post("/add",agregarCategoria);
router.delete("/del/:id",borrarCategoria);
router.patch("/upd/:id",actualizarCategoria)
export default router;