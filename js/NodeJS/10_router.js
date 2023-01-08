const ep = require("express")

const apiRouter = ep.Router()

apiRouter.get('/login', (req, res)=>{
    const qe = req.query
    res.send({
        status:0,
        msg:"succeed",
        data:qe
    })
})

apiRouter.post('/login', (req, res)=>{
    const bd = req.body
    res.send({
        status:0,
        msg:"succeed",
        data:bd
    })
})

module.exports = apiRouter