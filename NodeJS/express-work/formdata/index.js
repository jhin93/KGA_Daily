const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

let upload = multer();
let app = express();

const host = "127.0.0.1";
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("form");
})

app.use(bodyParser.json()); // body-parser 모듈을 .json이라는 메소드로 사용.
app.use(bodyParser.urlencoded({extended: true})); // extended: true는 qs라는 모듈을 사용하는 것.
app.use(upload.array()); // multer 사용

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("recieved request");
});

app.listen(port, host, () => [
    console.log(`Application Server running at http://${host}:${port}/`)
])


// 설치한 모듈
// express
// body-parser
// multer
// qs
// cookie-parser





