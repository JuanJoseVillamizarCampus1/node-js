//8.Importando router(enrutador) de express
import {Router} from "express";

//9.Guardando El enrutador en una constante 
const router = Router();

//11.Generando una respuesta la solicitud del cliente con req y res
router.get("/",(req,res)=>{
    res.send("Categorias de facturaArtemis")//12.se utiliza res.send() para enviar una respuesta al cliente. En este caso, se envía el mensaje "Categorias de facturaArtemis" como respuesta.
})


//10. exportando nuestro router
export default router;