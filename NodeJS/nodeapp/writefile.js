const fs = require('fs');

console.log('Writing file!!!!')

fs.writeFile('input.txt', 'This is file writing test in nodejs!!!', function(err) {
    if(err) return console.error(err);

    console.log("Data written success!!!");

    console.log("Read new file data");

    // fs.read 와 fs.readFile의 차이
    // https://nodejs.org/api/fs.html#fsreadfd-buffer-offset-length-position-callback
    fs.readFile('input.txt', (err, data) => {
        if(err) return console.log(err);
        console.log(data); // binary 데이터로 변환되어 buffer로 저장된 것을 확인할 수 있다.

        console.log("Async file reading :" + data.toString()); // data.toString() - writeFile 해준 내용. 실제로 input.txt의 내용이 바뀜.
    });
});

// 결과물
/*
Writing file!!!!
Data written success!!!
Read new file data
<Buffer 54 68 69 73 20 69 73 20 66 69 6c 65 20 77 72 69 74 69 6e 67 20 74 65 73 74 20 69 6e 20 6e 6f 64 65 6a 73 21 21 21>
Async file reading :This is file writing test in nodejs!!!
*/
