const User = require('../models/user');

const email = async (email) => {
    const existsEmail = await User.findOne({ email });
    if(existsEmail) {
        throw new Error(`El correo ${email} ya esta registrado`);
    }
}

module.exports = {
    email
}