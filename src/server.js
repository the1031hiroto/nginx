const http = require('http');
const fs = require('fs');

// 変更 const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World!\n');

    // HTML読み込み
    fs.readFile('hello.html','UTF-8',
    (error, data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});