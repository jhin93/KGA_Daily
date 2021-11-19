

const http = require("http");
const url = require("url");
const fs = require("fs");

var port = 3000;
var strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    var qString = url.parse(req.url, true);
    var fileName = "." + qString.pathname;

    fs.readFile(fileName, function(err, data){
        if(err) {
            res.writeHead(404, {"Content-Type" : "text/html charset-utf8"})
            return res.end("404 Not Found!")
        }

        res.writeHead(200, {"Content-Type" : "text/html charset-utf8"})
        res.write(data);
        res.end();
    });
})

server.listen(port, strIp, () => {
    console.log(`Running Server at http://${strIp}:${port}`);
})


// http://127.0.0.1:3000/summer.html 입력시 결과물 : 

// Summer
// I love Sun!!!

// http://127.0.0.1:3000/winter.html 입력시 결과물 : 

// Winter
// I love Snow!!!















