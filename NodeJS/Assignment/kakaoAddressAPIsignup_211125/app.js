const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();

app.set("view engine", "pug"); // pug 사용 설정.
app.set("views", "./views"); // views 폴더 연결

app.use(bodyParser.json()); //body-parser
app.use(bodyParser.urlencoded({extended:true})); //qs 모듈
app.use(upload.array());//multer
app.use(cookieParser());//cookieparser
app.use(session({
    secure: true,
    secret: process.env.SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge : (1000 * 60 * 100)
    }
}));

const host = "127.0.0.1"
const port = 3000

var Users = []

app.get("/signup", (req, res) => {
    res.render("signup", {
        message: "Signup"
    });
});

app.post("/signup", (req, res) => {
    if(!req.body.id || !req.body.password){  //둘중 하나라도 없으면
        res.status("404");
        res.send("Invalid id or password!!");
    }
    else {
        Users.filter((user) => {
            if(user.id === req.body.id){ // 입력받은 아이디(req.body.id) 와 이미 존재하는 아이디(Users 배열에 적용한 filter의 인자인 user.id)가 같다면, 가입한 적 있는 것.
                res.render("signup", {
                    message: "User Already Exists! Login or Choose another user id"
                });
            };
        });
        // 만약 가입한적 없다면, 새로 Users배열에 추가.
        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser
        res.redirect("/userInfo");
    };
});

// userInfo
app.get("/userInfo", (req, res) => {
    console.log("req.session.user에 대한 정보 : ", req.session.user);
    res.render("userInfo", {
        user: {id: req.session.user.id, password: req.session.user.password}
    });
});

app.listen(port, host, () => {
    console.log(`Application running at http://${host}:${port}/`);
});



