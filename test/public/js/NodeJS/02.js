
const fs = require('fs')

fs.readFile(__dirname+'/note.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("Read file failed! Error Info: ", err.message)
        return 
    }
    const arrOld = data.split(" ")
    const arrNew = arrOld.map((item, index, array)=>{
        let name = item.split('=')[0]
        let score = item.split('=')[1]
        return `${index+1}. ${name}:${score}`
    })
    const newData = arrNew.join('\r\n')
    fs.writeFile('./note_new.txt', newData, (err)=>{
        if(err){
            console.log("Write file failed! Error Info: ", err.message)
            return 
        }
        console.log("Write file Succeed!")
    })
})