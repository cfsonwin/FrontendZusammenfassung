const fs = require('fs')
const path = require('path')

const fPath = path.join(__dirname, 'demo.html')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(fPath, 'utf-8', (err, data)=>{
    if(err) return console.log(err.message);
    let css = regStyle.exec(data)[0]
    let js = regScript.exec(data)[0]
    let newCss = css.replace('<style>', '').replace('</style>', '')
    let newJs = js.replace('<script>', '').replace('</script>', '')
    let newHtml = data.replace(regStyle, '<link rel="stylesheet" href="./demo.css"/>').replace(regScript, '<script src="./demo.js"></script>')
    fs.writeFile(path.join(__dirname, path.basename(fPath, '.html')+ '.css'), newCss, (err)=>{
        if(err)console.log(err.message);
    })
    fs.writeFile(path.join(__dirname, path.basename(fPath, '.html') + '.js'), newJs, (err)=>{
        if(err)console.log(err.message);
    })
    fs.writeFile(path.join(__dirname, path.basename(fPath, '.html') + '_new.html'), newHtml, (err)=>{
        if(err)console.log(err.message);
    })
})






// console.log(fPath)