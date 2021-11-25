const express = require("express");
const cookieParser = require("cookie-parser"); // cookie 저장, 읽어오는 모듈
const host = "127.0.0.1";
const port = 3000;
const app = express();
app.use(cookieParser()); // cookieParser에 ()를 붙여야 실행됨.

app.get("/", (req, res) => {
    res.cookie("name", "express").send("cookie set"); // 쿠키 name을 express라고 하고 cookie set를 send한 것.
}); // postman에서 url 입력후 get으로 확인가능

// 쿠키 지우기
app.get('/clear', (req, res) => {
    res.clearCookie("name", "express"); // 쿠키삭제
    res.send("Cookie express cleared");
}); // http://127.0.0.1:3000/clear 에서 확인 가능

app.listen(port, host, () => {
    console.log(`Application server running at http://${host}:${port}/`);
});


// 쿠키는 서버 요청과 함께 클라이언트로 전송되고 클라이언트 측에 저장되는 단순하고 작은 파일
// 사용자가 웹사이트를 다시 로드할 때마다 이 쿠키가 요청과 함께 전송된다. 이는 사용자의 행동을 추적하는데 도움이 된다.
// 크롬 검사기에서 source의 cookies 에서 확인 가능.



