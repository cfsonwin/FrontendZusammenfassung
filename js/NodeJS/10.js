//模拟一个类似express.urlencoded()的中间件
const ep = require("express")
const cors = require("cors")
// const qs = require("querystring")

const router = require("./10_router")


const app = ep()
//MiddleWare
app.use(ep.urlencoded({extended: false}))
app.use(cors())


app.use("/api", router)

app.use((err, req, res, next)=>{
    console.log("Err MW")
    res.send(err.message)
})

app.listen(80, ()=>{
    console.log("Running server at http://127.0.0.1")
})