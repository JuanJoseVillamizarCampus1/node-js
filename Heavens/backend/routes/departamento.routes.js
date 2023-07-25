import { Router } from "express";
import {metodosHTTP} from "../controllers/departamento.controllers.js";
import validationDoc from "../middlewares/validate.documents.js"
import { check } from "express-validator";


const router = Router();
router.get("/departamentos/all", metodosHTTP.getDepartamento);
router.post("/departamentos/add",[check('nombre_departamento','Departamento no valido').not().isEmpty(),validationDoc],metodosHTTP.postDepartamento)
export default router;