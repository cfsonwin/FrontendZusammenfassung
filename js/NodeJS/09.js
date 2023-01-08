//模拟一个类似express.urlencoded()的中间件
const ep = require("express")
// const qs = require("querystring")
const app = ep()

app.use((req, res, next)=>{
    console.log("url encoded middleware")
    let reqStr = ''
    req.on('data', (chunk)=>{
        reqStr += chunk
    })
    req.on('end', ()=>{
        console.log("data receive finished! [ " + reqStr + ' ]')
        let reqObj = new URLSearchParams(reqStr)
        req.body = reqObj
        next()
    })
})

app.post("/", (req, res)=>{
    for (const p of req.body) {
        console.log(p);
      }
    res.send("Homepage")
})

app.get("/", (req, res)=>{
    console.log(req.body)
    res.send("Homepage")
})

app.use((err, req, res, next)=>{
    console.log("Err MW")
    res.send(err.message)
})

app.listen(80, ()=>{
    console.log("Start server at http://127.0.0.1")
})