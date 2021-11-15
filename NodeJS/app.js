var http = require('http');

// .createServer() 메소드
// https://www.w3schools.com/nodejs/met_http_createserver.asp

// .createServer() 메소드에서 인자로 받는 함수를 requestListener라고 한다.
// https://www.w3schools.com/nodejs/func_http_requestlistener.asp
    // requestListener의 첫째 인자로는 request를 받는데, IncomingMessage Object를 대변한다. 두번째 인자로는 response를 받는데, ServerResponse object를 대변한다.
    // 첫째인자 - https://www.w3schools.com/nodejs/obj_http_incomingmessage.asp
    /* 첫째인자 사용예시.
        http.createServer(function(req, res){
        res.end(req.url);
    }).listen(8080);
    */
    // 둘째인자 - https://www.w3schools.com/nodejs/obj_http_serverresponse.asp
http.createServer(function(req, res){
    // writeHead() 메소드.
    // response.writeHead()은 요청에 응답 헤더를 보내는 ‘http’ 모듈의 내장 속성이다.
    // https://lienkooky.tistory.com/109
    // https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    // res.end : 응답 프로세스를 종료합니다.
    // https://uhou.tistory.com/102
    res.end('hello World!!!');
    // server.listen() 메소드는 특정 패스나 포트에 대해서 리스너를 생성한다
    // https://www.w3schools.com/nodejs/met_server_listen.asp
}).listen(8080);

console.log("Create Server listen to 8080\n");































