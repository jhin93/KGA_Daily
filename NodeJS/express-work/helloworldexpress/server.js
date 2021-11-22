let express = require("express");
let app = express();

// 주소창에 public을 입력하지 않아도 express에 static하게 지정.
// public 안에 폴더나 파일을 넣으면 바로 사용 가능. ex ) http://localhost:3000/textrc/input.txt
app.use(express.static('public'));
app.use(express.static('common'));

app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening at http://%s:%s", host, port);
});





