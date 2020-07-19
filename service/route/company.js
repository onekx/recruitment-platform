const express = require('express')
const app = express.Router()

const Company = require('../model/Company')

app.route('/api/company')

    // 修改公司信息，没有则创建
    .put(async (req, res) => {
        const company = await Company.findOne({
            name: req.body.name
        })
        if (company) {
            Company.updateOne({ "name": req.body.name }, {
                $set: {
                    name: req.body.name,
                    type: req.body.type,
                    scale: req.body.scale,
                    logo: req.body.logo,
                    userId: req.body.uerId
                }
            }, err => {
                if (err) res.send({
                    ok: false,
                    message: '修改失败'
                })
                else res.send({
                    ok: true,
                    message: '修改成功',
                })
            })
        }
        else {
            const company = new Company()
            company.name = req.body.name
            company.type = req.body.type
            company.userId = req.body.userId
            company.scale = req.body.scale
            company.logo = req.body.logo
            company.save(err => {
                err ? res.send({ ok: false, message: '创建失败' })
                    : res.send({ ok: true, message: '创建成功', company })
            })
        }
    })

app.route('/api/company/:userId')
    // 获取公司信息
    .get(async (req, res) => {
        const company = await Company.findOne({
            userId: req.params.userId
        })
        company ? res.send({ ok: true, message: '获取成功', company })
            : res.send({ ok: false, message: '获取失败' })
    })

module.exports = app