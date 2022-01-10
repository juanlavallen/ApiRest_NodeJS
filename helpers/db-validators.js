const User = require('../models/user');
const Role = require('../models/role');

const email = async (email) => {
    const existsEmail = await User.findOne({ email });
    if (existsEmail) {
        throw new Error(`El correo ${email} ya esta registrado`);
    }
}

const role = async (role) => {
    const existsRole = await Role.findOne({ role });
    if(!existsRole) {
        throw new Error(`El rol ${role} no es valido`);
    }
}

module.exports = {
    email,
    role
}