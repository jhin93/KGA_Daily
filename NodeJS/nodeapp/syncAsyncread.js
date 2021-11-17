
var fs = require('fs');


fs.readFile('input.txt', (err, data) => { // arrow 연산자
    if(err) return console.error(err); // input.txt 파일명을 바꾸면 에러가 발생.

    console.log('Asyncronous read : ' + data.toString());
})

var data = fs.readFileSync('input.txt');
console.log('Syncronous read : ' + data.toString());

console.log('Finished program!!!');


// 결과물
// Syncronous read : Tutorials POint is giving self learning contetn
// to teach the world in simple and easy way!!!!!!
// Finished program!!!
    // 콜백이 나중에 나옴.
// Asyncronous read : Tutorials POint is giving self learning contetn
// to teach the world in simple and easy way!!!!!!


















