const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 引入路由
const user = require('./route/user')
app.use(user)

const port = 5959

mongoose.connect('mongodb://localhost:27017/recruitment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log('数据库连接失败', err)
    else {
        app.listen(port, (err) => {
            if (err) console.log(err)
            else console.log(`服务运行在 localhost:${port}`)
        })
    }
})