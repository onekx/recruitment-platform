const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})


const port = 5959
app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log(`服务运行在 localhost:${port}`)
})