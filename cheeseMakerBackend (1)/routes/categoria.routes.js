const { Router } = require('express');
const { check } = require('express-validator');

const { validateDocuments} = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');

const { postCategoria,getCategorias,getCategoria,deleteCategoria,putCategoria} = require('../controllers/categoria.controllers.js');
const { isAdminRole } = require('../middlewares/validate.role.js');
const { CategoriaExistsById } = require('../helpers/db.validators.js');

const router = Router();

/**
 * localhost/api/categorias
 */
// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [ 
   validateJWT, 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validateDocuments
], postCategoria );
router.get('/',getCategorias)
router.get('/:id',getCategoria)
router.delete('/:id',[validateJWT,isAdminRole,check('id', 'No es un ID válido').isMongoId(),
check('id').custom( CategoriaExistsById ),
validateDocuments],deleteCategoria)
router.put('/:id',[ validateJWT,
check('id').custom(CategoriaExistsById)],putCategoria)






module.exports = router;