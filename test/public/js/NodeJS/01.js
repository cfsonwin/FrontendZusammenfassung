console.log("Hallo NodeJS")
const fs = require('fs')
fs.readFile(__dirname+"/../index.js", 'utf-8', function(err, data){
    console.log(err) //null为读取成功
    console.log(data)
})
fs.writeFile("./1.txt", "chou Zhu", function(err){
    console.log(err)
})
