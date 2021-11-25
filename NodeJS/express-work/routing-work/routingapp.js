
const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 3000;
app.get('/hello', (req, res) => {
    res.send("Hello World!!")
});

app.post('/hello', (req, res) => {
    res.send("You just called the post method at '/hello'")
});

app.listen(port, host, () => {
    console.log(`Application Server running at http://${host}:${port}/`);
});


// cmd 창에서도 post 테스트 가능
// 먼저 해당 디렉토리 위치로 이동
//  KGA-002@DESKTOP-4SBVOI7 MINGW64 ~/Desktop/KGA_daily/NodeJS/express-work/routing-work (master)
// 다음과 같이 입력
//  $ curl -X POST "http://localhost:3000/hello"










