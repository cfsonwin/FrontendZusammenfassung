const ep = require("express")

const router = ep.Router()

router.get('/:username/homepage', (req, res)=>{
    res.send(`hallo ${req.params.username}`)
})

module.exports = router