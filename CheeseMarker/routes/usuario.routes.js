const {Router}= require ('express');
const router = Router();
const {getUsers,postUsers,deleUsers,addUsers,updateUsers} = require ('../controllers/usuario.controllers.js')
module.exports= router;


router.get("/",getUsers)

router.post("/",postUsers)
router.delete("/",deleUsers)
router.put("/",addUsers)
router.patch("/",updateUsers)