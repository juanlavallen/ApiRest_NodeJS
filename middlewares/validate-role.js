const adminRole = (req, res, next) => {

    if (!req.user) {
        return res.status(500).json({
            msg: 'No se puede verificar el rol sin antes validar el token'
        });
    }

    const { role, name } = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} no es Administrador`
        });
    }

    next();
}

const roles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(500).json({
                msg: 'No se puede verificar el rol sin antes validar el token'
            });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                msg: `El servicio require uno de estos roles ${roles}`
            });
        }

        next();
    }
}

module.exports = {
    adminRole,
    roles
}