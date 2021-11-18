
const http = require("http");
const fs = require("fs");
const url = require("url");

var port = 6237;
var strIp = '127.0.0.1'

var server  = http.createServer((req, res) => {
    // 주소창에는 http://127.0.0.1:6237/helloworld.html를 입력

    // url.parse에 줄이 생기는 이유는 더이상 사용하지 않으니 추천하지 않는다 - https://velog.io/@satoshi25/url.parse-deprecated
    var pathName = url.parse(req.url).pathname // parse() - URL 문자열을 입력하면 URL 객체를 만든다. 만든 url 객체에서 pathname 키의 밸류를 가져옴. https://gongbu-ing.tistory.com/9
    console.log("request for : " + pathName + " received!!!\n"); // 서버를 실행한(node createServer.js를 입력한) 콘솔에 client.js를 실행시키고 나면 이 메세지가 나온다.
    // substr가 인덱스 1을 포함한 이후로(/의 뒤로) helloworld.html을 받음(helloworld.html). 
    fs.readFile(pathName.substr(1), (err, data) => { // helloworld.html을 readFile로 읽어옴.
        if(err) {
            console.log(err); // 에러발생시 메세지와 404 찍기
            // HTTP Status : 404 - NOT FOUND
            // Content-type : text/html
            res.writeHead(404, {"Content-type" : "text/html; charset-utf8"});
        } else {
            // HTTP Status : 200 - OK
            res.writeHead(200, {"Content-type" : "text/html; charset-utf8"});
            res.write(data.toString());
        }
    
        //Send the response body
        res.end();
    })
})

// favicon이 없어서 에러는 뜸.
server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`)
})






