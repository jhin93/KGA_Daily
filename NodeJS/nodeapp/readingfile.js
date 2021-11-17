const fs = require('fs');
var buf = Buffer.alloc(1024)


console.log('Open existing file!!!!')

// r+는 읽고 저장까지 가능한 옵션
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("File open success!!!");

    console.log('Reading file!!!!!');
    // 인자로 받은 fd
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) return console.error(err);

        console.log('Reading file success');
        // buf를 0부터 bytes까지만 읽어서 출력.
        if(bytes > 0) console.log(buf.slice(0, bytes).toString())
    })
})

// 결과물
/*
Open existing file!!!!
File open success!!!
Reading file!!!!!
Reading file success
This is file writing test in nodejs!!! -- 파일내용
*/




























