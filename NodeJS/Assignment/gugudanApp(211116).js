
var http = require('http');

// 로컬호스트 아이디
const homePage = '127.0.0.1';
const port = 5000;

// 세로출력
function gugudanCero(){
    let multi;
    // 값을 안준 상태(ex let result;)에서 값을 더하면 undefined 뜸.
    let result = '';
    for(let i = 1; i < 10; i ++){
        for(let j = 1; j < 10; j ++){
            multi = i*j;
            result += i + ' * ' + j + ' = ' + multi + '\n';
        }
        result += '\n'
    }
    console.log(result);
}

// 가로출력
function gugudanGaro(){
    let multi = '';
    let result = '';
    for(let i = 1; i < 10; i ++){
        for(let j = 1; j < 10; j ++){
            multi = i*j;
            // result에 구구단 넣기전에 미리 언더바 넣기. 1제외.
            if(j > 1) {
                result += ' __ '
            }
            result += i + ' * ' + j + ' = ' + multi;
        }
        result += '\n'
    }
    console.log(result);
}

const server = http.createServer(function(req, res){
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // 브라우저에 상태코드를 알려줘야 한다.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end();
})

// 포트, url, 익명함수
server.listen(port, homePage, () => {
    gugudanCero();
    gugudanGaro();
    console.log(`Server running at http://${homePage}:${port}/`);
});








