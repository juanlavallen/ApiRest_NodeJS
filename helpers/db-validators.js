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

const userId = async(id) => {
    const existsUserId = await User.findById(id);
    if(!existsUserId) {
        throw new Error(`El usuario con el ID ${id} no existe`);
    }
}

module.exports = {
    email,
    role,
    userId
}