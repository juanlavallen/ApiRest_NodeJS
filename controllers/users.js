const userGet = (req, res) => {
    res.json({
        msg: 'get API'
    });
}

const userPost = (req, res) => {
    res.json({
        msg: 'post API'
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