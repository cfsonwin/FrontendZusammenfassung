const ep = require("express")
const fs = require("fs");
const cors = require("cors")
const session = require("express-session")
const jsonwebtoken = require("jsonwebtoken")
const { expressjwt: epJWT } = require("express-jwt")

const rSecret = new Promise((res, rej) => {
    fs.readFile("./secret.json", "utf-8", (err, data) => {
        if (err) rej(err);
        const dataObj = JSON.parse(data)
        res(dataObj["secret01"])
    })
})


const app = ep()

//JWT注册
const secretKey = "asge4g5getg5"


//注册中间件
app.use(cors())
// app.use(session({
//     secret: "用来加密的任意字符串",
//     resave: false,
//     saveUninitialized: true
// }))
app.use(
    epJWT({
        secret: secretKey,
        algorithms: ["HS256"]
    }).unless({
        path: [/^\/login/]
    })
)
app.use(ep.urlencoded({ extended: false }))

app.post("/login", (req, res) => {
    if (req.body.username !== "Lawi" || req.body.password !== "admin123") {
        res.send("账号或者密码不存在!")
        return
    }
    // req.session.user = req.body
    // req.session.islogin = true
    // console.log(req.session)
    // res.send("登陆成功！")
    const tokenStr = jsonwebtoken.sign({username: req.body.username}, secretKey, {expiresIn: '1 d'})
    res.send({
        status : 200,
        message: "登陆成功",
        token: tokenStr
    })
})

// app.use((req, res, next)=>{
//     console.log(req.session)
//     if(!req.session.islogin){
//         return res.send({status: 1, msg:"Please login first!"})
//     }else{
//         console.log("pass mw-login")
//         next()
//     }

// })

//注册路由
app.get("/", (req, res) => {
    // console.log(req.session)
    // if (!req.session.islogin) {
    //     return res.send({ status: 1, msg: "Please login first!" })
    // } else {
    //     console.log("pass mw-login")
    // }
    res.send("Homepage Willkommen " + req.session.user.username)

})

app.get("/jwt-test", (req, res)=>{
    console.log(req.auth)
    res.send("Test Pass " + req.auth.username)
})



app.get("/secret", (req, res) => {
    rSecret.then(value => {
        res.send(value)
    }, reason => {
        res.send(reason)
    })
})

app.use((err, req, res, next)=>{
    if(err.name === 'UnauthorizedError'){
        return res.send({
            status: 401,
            message: "无效Token"
        })
    }
    return res.send({
        status: 500,
        message: "未知错误"
    })
})




app.listen(80, () => {
    console.log("Running Server at http://127.0.0.1")
})