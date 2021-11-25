
const express = require("express");
const app = express();
const port = 3000;
const host = "127.0.0.1"
const routing = require("./router.js");

// 여기서 첫번째 인자에 url을 지정해줌. 마치 routingapp.js에 app.get('/hello', 라고 입력해준 것처럼.
// .use 메소드로 가져온 모듈을 쓴 것.
app.use("/router", routing); 

app.listen(port, host, () => {
    console.log(`index server running at http://${host}:${port}/`);
});

//  http://127.0.0.1:3000/router 에서 확인가능. GET만.








