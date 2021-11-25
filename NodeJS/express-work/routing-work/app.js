
const express = require("express");
const app = express();
const host = "127.0.0.1";
const port = 3000;

app.get("/:id", (req, res) => { // url에 http://127.0.0.1:3000/test 입력시, 결과물은 The id is : test 가 출력됨. 
    res.send("The id is : " + req.params.id);
});

app.get("/hello/:name/:id", (req, res) => {
    res.send("name: " + req.params.name + " id: " + req.params.id);
})

// 패턴 매칭하는 정규표현식

app.get("/helloworld/:id([0-9]{5})/:name([a-z]{5})", (req, res) => { // 0부터 9까지 5자리 수, a부터 z까지 5글자
    res.send("id: " + req.params.id + " name: " + req.params.name);
})

app.listen(port, host, () => {
    console.log(`Application server running at http://${host}:${port}/`)
});








