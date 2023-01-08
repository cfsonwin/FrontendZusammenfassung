const ep = require('express')
const fs = require('fs')
const path = require('path')
const fpath = path.join(__dirname, '..', '..', 'test')

const app = ep()
app.use('/public' ,ep.static(path.join(fpath, 'public')))

app.get('/user', (req, res)=>{
    res.send({name: 'Lawi'})
})

app.get('/', (req, res)=>{
    console.log(req.query)
    res.send('请求成功!')
})

app.get('/:id/index', (req, res)=>{
    //:id是一个动态参数
    console.log(req.params)
    res.send(req.params)
})

app.post('/login', (req, res)=>{

    res.send('请求成功')
})

app.get('/static', (req, res)=>{
    fs.readFile(path.join(fpath, "index.html"), 'utf-8', (err, data)=>{
        if(err){
            return console.log(err.message)
        }
        res.send(data)
    })
    
})

app.listen(57575, ()=>{
    console.log("Server running at http://127.0.0.1:57575")
})

//使用路由模块儿
const userIndex = require("./07.js")
app.use(userIndex)