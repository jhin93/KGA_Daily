
//fs.open을 했으면 fs.close를 해야 한다.
const fileSystem = require('fs');

var buf = Buffer.alloc(1024);

console.log("Open existing input.txt file!!!")
fileSystem.open('input.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log("input.txt open success!!!");

    console.log("Reading input.txt file!!!")
    // 0번째 offset, buf.length 만큼 읽어라
    fileSystem.read(fd, buf, 0, buf.length, 0, (err, bytes, bf) => {
        if(err) return console.err(err);

        console.log(bf); // 받은 Buffer 확인

        console.log("input.txt reading success!!!");
        // 0부터 읽은 만큼(bytes) 출력
        if(bytes > 0) console.log(buf.slice(0, bytes).toString);

        // 열린 file descriptor를 close
        fileSystem.close(fd, () => {
            if(err) return console.log(err);

            console.log("input.txt file closed success!!!");
        });
    });
});

/* 결과물
Open existing input.txt file!!!
input.txt open success!!!
Reading input.txt file!!!
input.txt reading success!!!
[Function: toString]
input.txt file closed success!!!
 */


























