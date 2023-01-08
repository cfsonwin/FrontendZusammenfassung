const http = require('http')
const server = http.createServer()
server.on(
    'request',
    (req, res) => {
        const url = req.url
        let content = ''
        // if(url==='/' || url==='/index.html'){
        //     content = '<h1>首页</h1>'
        // }else if(url === '/about.html'){
        //     content = '<h1>关于页面</h1>'
        // }
        switch (url) {
            case '/':
                content = '<h1>首页</h1>'
                break;
            case '/index.html':
                content = '<h1>首页</h1>'
                break;
            case '/about.html':
                content = '<h1>关于页面</h1>'
                break;
            default:
                content = '<h1>404 Not Found!</h1>'
                break;
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(content)
    }
)
server.listen(53535, () => {

    console.log('server running at http://127.0.0.1:53535')
})