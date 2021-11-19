const http = require("http");
const url = require('url');

const port = 4554;
const strIP = '127.0.0.1';


var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html; charset-utf8'})
    var strQuery = url.parse(req.url, true).query;
    var text = strQuery.year + " " + strQuery.month;
    res.end(text)
})

server.listen(port, strIP, () => {
    console.log(`Server running at http://${strIP}:${port}`);
});


// 주소창에 http://127.0.0.1:4554/?year=2021&month=10 입력시 결과물 :
// 2021 10


















