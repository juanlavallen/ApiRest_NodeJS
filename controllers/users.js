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
        user
    });
}

const userPut = async (req, res) => {

    const { id } = req.params;
    const { _id, google, email, password, ...rest } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const userUpdate = await User.findByIdAndUpdate(id, rest);

    res.json({
        userUpdate
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