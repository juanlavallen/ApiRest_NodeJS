const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const { 
    userGet, 
    userPost, 
    userPut, 
    userDelete } = require('../controllers/users');
    
const router = Router();

router.get('/', userGet);

router.post('/',[
    check('name', 'El nombre es obligatorio').notEmpty(),
    validateFields
], userPost);

router.put('/:id', userPut);

router.delete('/:id', userDelete);

module.exports = router;