const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write("<h1>I am happy to learn full stack web development from PW Skills");
    }
    res.end();
});

server.listen(5001);
console.log("HTTP server running on port 5001");