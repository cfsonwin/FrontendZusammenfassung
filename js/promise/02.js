const fs = require('fs')
// const ex2 = document.getElementById("ex2")


// fs.readFile("./02.js", "utf-8", (err, data)=>{
//     if(err) throw err;
//     console.log(data)
// })


const p = new Promise((res, rej) => {
    fs.readFile("./02.js", "utf-8", (err, data) => {
        if (err) rej(err);
        res(data)
    })
})

p.then(value=>{console.log(value)}, reason=>{console.log(reason)})