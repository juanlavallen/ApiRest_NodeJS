const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { email } = require('../helpers/db-validators');

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
    validateFields
], userPost);

router.put('/:id', userPut);

router.delete('/:id', userDelete);

module.exports = router;