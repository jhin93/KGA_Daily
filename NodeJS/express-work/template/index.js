
const express = require('express');
const app = express();

app.set("view engine", "pug"); // view engine은 pug 사용
app.set("views", "./testviews"); // views는 testviews에 연결

const host = '127.0.0.1';
const port = 3000;
// firstview.pug
app.get("/firsttemp", (req, res) => {
    res.render("firstview");
});

// dynamic.pug
app.get('/dynamic_view', (req, res) => {
    res.render("dynamic", {
        name:"KDigital for class",
        url:"https://www.daum.net"
    })
})
// 같은 dynamic.pug 이지만 url을 다르게 쓰면서 다른 화면을 렌더링할 수 있다.
app.get('/dynamic_view2', (req, res) => {
    res.render("dynamic", {
        name:"Apple home page",
        url:"https://www.apple.com"
    })
})

app.get('/dynamic_view3', (req, res) => {
    res.render("anotherdynamic", { // 다른 pug 파일을 렌더링
        name:"Apple home page",
        url:"https://www.apple.com"
    })
})

// 데이터 객체를 pug로 전달하여 렌더링하기
app.get('/hi', (req, res) => {
    res.render("hifriend", {
        user : {name: "Michael", age: "20"}
    });
});

// content.pug에서 components 따로 모아서 연결
app.get('/components', (req, res) => {
    res.render("content")
});

app.listen(port, host, () => {
    console.log(`Index application running at http://${host}:${port}/`);
});

// 결과확인 http://127.0.0.1:3000/firsttemp






