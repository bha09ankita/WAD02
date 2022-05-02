const fs = require('fs');
const http = require('http');


http.createServer((req, res) => {
    fs.readFile("../Code/index.html", null,(err, data) =>{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if(err){
            res.writeHead(404);
            res.end(err);
        }
        console.log("create server")
        res.writeHead(200,data);
        res.end(data);
    })
}).listen(3000);
