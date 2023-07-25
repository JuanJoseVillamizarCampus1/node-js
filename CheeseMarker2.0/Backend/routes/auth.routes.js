const {Router} = require('express');
const {check} = require ('express-validator');
const { login } = require('../controllers/auth.controllores.js');
const {validationDoc} = require ('../middlewares/validate.documents.js')
const router = Router();

router.post('/login',[check('email','Email is required').isEmail(),
check('password','Password is required').not().isEmpty(),validationDoc],login);

module.exports = router;
