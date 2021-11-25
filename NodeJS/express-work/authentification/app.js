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
app.use(bodyParser.urlencoded({extended:true})); //qs
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
            if(user.id === req.body.id){
                res.render("signup", {
                    message: "User Already Exists! Login or Choose another user id"
                });
            };
        });

        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser
        res.redirect("/protected_page");
    };
});

// protected_page
app.get("/protected_page", (req, res) => {
    res.render("protected_page");
})

app.listen(port, host, () => {
    console.log(`Application running at http://${host}:${port}/`);
});



