var fs = require('fs');

// Asynchronous - Open file
console.log('Open file !!!')
// .open 메소드
// https://psyhm.tistory.com/15

fs.open('input.txt', 'r+', function(err, fd){
    if(err) return console.error(err);
    // input.txt 파일이 존재하지 않을 경우

    // 결과물
    // Open file !!!
    // { [Error: ENOENT: no such file or directory, open 'input.txt'] errno: -2, code: 'ENOENT', syscall: 'open', path: 'input.txt' }

    console.log('File Opened Success!!!')
    // 결과물
    // Open file !!!
    // File Opened Success!!!
})



























