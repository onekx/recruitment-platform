const express = require('express')
const app = express.Router()

const Recruitment = require('../model/Recruitment')
const auth = require('../middleware/auth')

app.route('/api/recruitment')
    // 上传招聘信息
    .post(auth, (req, res) => {
        const recruitment = new Recruitment()
        recruitment.name = req.body.name
        recruitment.city = req.body.city
        recruitment.minWage = req.body.minWage
        recruitment.maxWage = req.body.maxWage
        recruitment.minYear = req.body.minYear
        recruitment.maxYear = req.body.maxYear
        recruitment.degree = req.body.degree
        recruitment.desc = req.body.desc
        recruitment.time = req.body.time
        recruitment.userId = req.body.userId
        recruitment.save(err => {
            if (err) res.send({
                ok: false,
                message: '发布失败'
            })
            else res.send({
                ok: true,
                message: '发布成功',
                recruitment
            })
        })
    })

// 按照城市分类
app.get('/api/recruitment/:city', (req, res) => {
    if (req.params.city == '全国站') {
        Recruitment.find((err, doc) => {
            if (err) res.send({
                ok: false,
                message: '获取失败'
            })
            else res.send({
                ok: true,
                recruitments: doc
            })
        })
    } else {
        Recruitment.find({ "city": req.params.city }, (err, doc) => {
            if (err) res.send({
                ok: false,
                message: '获取失败'
            })
            else res.send({
                ok: true,
                message: '获取成功',
                recruitments: doc
            })
        })
    }
})


// 按照搜索结果查询
app.get('/api/recruitment/:city/:value', (req, res) => {
    if (req.params.city == '全国站') {
        Recruitment.find({ name: { $regex: '.*' + req.params.value + '.*' } }, (err, doc) => {
            if (err) res.send({
                ok: false,
                message: '查询失败',
                err
            })
            else res.send({
                ok: true,
                message: '查询成功',
                recruitments: doc
            })
        })
    } else {
        Recruitment.find({
            name: { $regex: '.*' + req.params.value + '.*' },
            city: { $regex: '.*' + req.params.city + '.*' }
        },
            (err, doc) => {
                if (err) res.send({
                    ok: false,
                    message: '查询失败',
                    err
                })
                else res.send({
                    ok: true,
                    message: '查询成功',
                    recruitments: doc
                })
            })
    }
})

// 通过 id 获取招聘信息
app.get('/api/recruitmentid/:id', (req, res) => {
    Recruitment.findById(req.params.id, (err, doc) => {
        if (err) res.send({
            ok: false,
            message: '获取失败'
        })
        else res.send({
            ok: true,
            message: '获取成功',
            content: doc
        })
    })
})

// 投递简历
app.post('/api/recruitments/:id/resume', (req, res) => {
    Recruitment.findById(req.params.id, (err, doc) => {
        if (err) res.send({
            ok: false,
            message: '查询失败'
        })
        else {
            doc.resumes.push(req.body.userId)
            res.send({
                ok: true,
                result: doc
            })
        }
    })
})

module.exports = app