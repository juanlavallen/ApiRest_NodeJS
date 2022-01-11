const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { email, role, userId } = require('../helpers/db-validators');

const {
    userGet,
    userPost,
    userPut,
    userDelete } = require('../controllers/users');

const router = Router();

router.get('/', userGet);

router.post('/', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').custom(email).notEmpty(),
    check('password', 'La contraseña es obligatoria').notEmpty().isLength({ min: 8 }),
    check('role', 'El rol es obligatorio').custom(role).notEmpty(),
    validateFields
], userPost);

router.put('/:id',[
    check('id', 'El ID no es valido').isMongoId(),
    check('id').custom(userId),
    check('role').custom(role),
    validateFields
] ,userPut);

router.delete('/:id', [
    check('id', 'El ID no es valido').isMongoId(),
    check('id').custom(userId),
    validateFields
] ,userDelete);

module.exports = router;