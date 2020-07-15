const express = require('express')
const app = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../model/User')

app.post('/api/register', (req, res) => {
    const user = new User()
    user.email = req.body.email
    user.password = req.body.password
    user.save((err) => {
        if (err) res.send({
            ok: false,
            message: err
        })
        else {
            res.send({
                ok: true,
                message: '注册成功',
                user
            })
        }
    })
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    })
    if (!user) res.send({
        ok: false,
        message: '用户不存在'
    })

    else {
        if (user.password === req.body.password) {
            const token = jwt.sign({ id: user._id }, "kx")
            res.send({
                ok: true,
                message: '登录成功',
                user,
                token
            })
        }

        else res.send({
            ok: false,
            message: '密码错误'
        })
    }
})

module.exports = app