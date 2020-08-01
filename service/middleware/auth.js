const jwt = require('jsonwebtoken')
const User = require('../model/User')

const auth = async (req, res, next) => {
    try {
        const raw = req.headers.authorization
        const { id } = jwt.verify(raw, 'kx')
        req.user = await User.findById(id)
        next()
    } catch (err) {
        res.send({
            ok: false,
            message: err
        })
    }
}

module.exports = auth