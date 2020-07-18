const express = require('express')
const app = express.Router()

const Recruitment = require('../model/Recruitment')

app.route('/api/recruitment')
    // 上传招聘信息
    .post((req, res) => {
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

app.get('/api/recruitment/:city', (req, res) => {
    if (req.params.city == '全国站') {
        Recruitment.find((err, doc) => {
            if (err) res.send({
                ok: false,
                message: '获取失败'
            })
            else res.send({
                ok: true,
                cities: doc
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
                cities: doc
            })
        })
    }
})

module.exports = app