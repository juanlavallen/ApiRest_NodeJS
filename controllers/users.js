const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const userGet = async (req, res) => {

    const { limit = 10, from = 0 } = req.query;
    const query = { status: true }

    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ]);

    res.json({
        total,
        users
    });
}

const userPost = async (req, res) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

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

const userDelete = async (req, res) => {

    const { id } = req.params;

    const userDelete = await User.findByIdAndUpdate(id, { status: false });

    res.json({
        userDelete
    });
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}