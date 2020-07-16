const express = require('express')
const app = express.Router()

const City = require('../model/City')

app.route('/api/city')
    // 向数据库中添加城市列表
    .post((req, res) => {
        const cities = new City()
        cities.cities = req.body.cities
        cities.save((err) => {
            if (err) res.send({
                ok: false,
                message: '添加城市列表失败'
            })
            else res.send({
                ok: true,
                message: '添加成功'
            })
        })
    })

    // 获取城市列表
    .get(async (req, res) => {
        try {
            const cities = await City.find()
            res.send({
                ok: true,
                cities: cities[0].cities
            })
        } catch (err) {
            res.send({
                ok: false,
                message: '获取城市列表失败'
            })
        }
    })

module.exports = app