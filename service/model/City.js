const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
    cities: {
        type: Array,
        default: [
            "全国站",
            "北京站",
            "上海站",
            "广州站",
            "深圳站",
            "成都站",
            "杭州站",
            "武汉站",
            "苏州站",
            "重庆站",
            "天津站",
            "长沙站"
        ]
    }
})

module.exports = mongoose.model('City', CitySchema, 'city')