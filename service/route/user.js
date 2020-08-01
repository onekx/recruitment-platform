const express = require('express')
const app = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../model/User')
const auth = require('../middleware/auth')

// 注册
app.post('/api/register', (req, res) => {
    const user = new User()
    user.role = req.body.role
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

// 登录
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

app.route('/api/user/:id')

    // 获取用户信息
    .get(auth, async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) res.send({
            ok: false,
            message: '未找到该用户'
        })
        else res.send({
            ok: true,
            user
        })
    })

    // 修改用户信息
    .put(auth, (req, res) => {
        User.updateOne({ "_id": req.params.id }, {
            $set: {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                university: req.body.university,
                subject: req.body.subject,
                degree: req.body.degree,
                des: req.body.des,
                job: req.body.job
            }
        }, err => {
            if (err) res.send({
                ok: false,
                message: '信息修改失败'
            })
            else res.send({
                ok: true,
                message: '信息修改成功'
            })
        })
    })

module.exports = app