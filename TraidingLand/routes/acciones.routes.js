import express from "express";
import {getAcciones,addAcciones} from "../controllers/acciones.controllers.js"
const router = express.Router();

router.get("/all", getAcciones)
router.post("/add",addAcciones)
export default router;