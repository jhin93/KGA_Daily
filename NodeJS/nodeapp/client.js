
const http = require('http');

// Option to be used by request
var options = {
    host: 'localhost',
    port: '6237',
    path: '/helloworld.html'
}

var callback = function(response){
    var body = '';
    // data라는 이벤트
    response.on('data', function(data){
        body += data;
    })

    response.on('end', () => {
        // helloworld.html 의 내용을 가져와서 콘솔에 찍음
        console.log(body);
    })
}

var req = http.request(options, callback);
req.end();























