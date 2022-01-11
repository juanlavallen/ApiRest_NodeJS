const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No se encontro ningun token'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findById(uid);

        if (!user) {
            return res.status(401).json({
                msg: 'No se encontro el usuario en base de datos'
            });
        }

        if (!user.status) {
            return res.status(401).json({
                msg: 'Token no valido'
            });
        }

        req.user = user;
        next();

    } catch (err) {
        console.log(err);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
}

module.exports = {
    validateJWT
}