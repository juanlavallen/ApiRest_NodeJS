const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const userGet = (req, res) => {
    res.json({
        msg: 'get API'
    });
}

const userPost = (req, res) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
    res.json({
        msg: 'post API',
        user
    });
}

const userPut = (req, res) => {
    res.json({
        msg: 'put API'
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}