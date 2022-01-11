const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const User = require('../models/user');

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: 'El correo es incorrecto'
            });
        }

        if (!user.status) {
            return res.status(400).json({
                msg: 'El correo ya no es valido'
            });
        }

        const validatePassword = bcryptjs.compareSync(password, user.password);
        if (!validatePassword) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            })
        }

        const token = generateJWT(user.id);

        res.json({
            user,
            token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Ocurrio un error'
        });
    }
}

module.exports = {
    login
}