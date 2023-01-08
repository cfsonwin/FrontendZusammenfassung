function myReadFile(fPath){
    return new Promise((res, rej)=>{
        require("fs").readFile(fPath, "utf-8", (err, data)=>{
            if(err){
                rej(err.message)
            }else{
                res(data)
            }
        })
    })
}

myReadFile("./secret.json").then(value=>{console.log(value)}, reason=>{console.log(reason)})