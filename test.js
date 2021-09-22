// 内置模块、三方模块、自定义模块
const http = require('http');

http.createServer((req, res) => {
    let url = req.url;
    res.write(url);
    res.end();
}).listen(8080, 'localhost',() => {
    console.log('localhost:8080')
})