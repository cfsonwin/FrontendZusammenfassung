const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, "..", "..", "..", "test")
console.log(root)
const urlObj = {
    Homepage: [
        "Homepage",
        "./index.html"
    ],
    AJAX: [
        "Ajax",
        "./0918_AJAX_Introduction.html",
        "./0920_AJAX_HTTP_Express.html",
        "./0920_AJAX_Example1.html",
        "./0921_AJAX_IE_网络超时&异常_重复请求.html",
        "./0921_AJAX_withJQuert_Axios.html"
    ],
    ES: [
        "ES",
        "./0913_ES_let_const.html"
    ],
    NODEJS: [
        "Node.JS",
        "./0914_NodeJS_Introduction.html"
    ],
    REACT: [
        "React",
        "./1005_React_Introduction.html",
        "./1007_React_Component.html",
        "./1017_React_Lifecycle.html",
        "./1024_React_Router.html",
        "./1102_React_UIlib.html",
    ],
    JS: [
        "Javascript",
        "./0716_JS_introduction.html",
        "./0719_JS_运算符.html",
        "./0719_JS_循环_判断.html",
        "./0801_JS_对象_数据类型.html",
        "./0804_JS_函数_作用域_this_工厂对象_原型对象.html",
        "./0804_JS_总结_属性检查_垃圾回收.html",
        "./0805_JS_Math_包装类_String补充.html",
        "./0805_JS_数组_Date_函数方法与参数.html",
        "./0806_JS_正则表达.html",
        "./0807_JS_DOM_Node_事件_查询.html",
        "./0811_JS_DOM练习.html",
        "./0812_JS_BOM.html",
        "./0816_JS_Window的方法.html",
        "./0918_JS_总复习.html"
    ],
    CSS: [
        "CSS",
        "./0822_CSS_简介_选择器.html",
        "./0823_CSS_单位_文档流_盒模型.html",
        "./0824_CSS_盒子模型_布局_Inline_Display.html",
        "./0826_CSS_Float_Position.html",
        "./0827_CSS_字体_IconFont_Font属性.html",
        "./0829_CSS_BackgroungImage.html",
        "./0901_CSS_渐变_表格_表单.html",
        "./0902_CSS_补充.html",
        "./0904_CSS_过渡_动画_变形.html",
        "./0905_CSS_Less_弹性盒.html",
        "./0906_CSS_像素_媒体查询.html"
    ],
    HTML: [
        "HTML"
    ],
    ANGULAR: [
        "Angular",
        "0919_Angular_introduction.html"
    ],

}
const server = http.createServer()
let content = '404'
let fpath = ""
const regToReplace = /\"\.\.\//g
server.on('request', (req, res) => {
    const url = req.url
    console.log("请求地址为： ",url)
    switch (url) {
        case '/' || '':
            fpath = path.join(root, urlObj["Homepage"][1])
            break;
        default:
            fpath = path.join(root, url)
            break;
    }
    console.log("文件路径为： ", fpath)
    fs.readFile(fpath, 'utf-8', (err, data)=>{
        if(err) return console.log(err.message);
        content = data
    })
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})
server.listen(53535, () => {
    console.log('server running at http://127.0.0.1:53535')
})
