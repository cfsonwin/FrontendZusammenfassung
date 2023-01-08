const ep = require("express")
const df = require("./05_test")

const app = ep()

const mw1 = function(req, res, next){
    console.log("1st Middleware")
    const time= new Date
    req.startTime = df(time)
    next()
}



const mw2 = (req, res, next)=>{
    console.log("2nd Middleware")
    next()
}
// app.use(mw1)
app.use(ep.json())
app.use(ep.urlencoded({extended: false}))

app.get("/", mw1, (req, res)=>{
    console.log("index.html")
    res.send("request succeed! request start at: "+ req.startTime)
})

app.get("/test", mw1, mw2, (req, res)=>{
    console.log("test.html")
    res.send("request succeed! request start at: "+ req.startTime)
})

app.get("/err", (req, res)=>{
    throw new Error("new error")
    res.send("Errpr page")
})

app.post("/mwj", (req, res)=>{
    console.log(req.body)
    res.send("ok")
})

app.use((err, req, res, next)=>{
    console.log("Err MW")
    res.send(err.message)
})

app.listen(57575, ()=>{
    console.log("Server running at http://127.0.0.1:57575")
})

