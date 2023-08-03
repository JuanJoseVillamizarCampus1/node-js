const {Router} = require('express');
const { check } = require('express-validator');
const { validateDocuments} = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { postCheese} = require('../controllers/cheese.controller.js');
const { isAdminRole } = require('../middlewares/validate.role.js');
const {  } = require('../helpers/db.validators.js');
const router = Router();

/**
 * localhost/api/categorias
 */
// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [ 
   validateJWT, 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validateDocuments
], postCheese );
module.exports = router;