// non blocking 코드 예시. 비동기 처리.
// 콜백함수 안에서는 순서대로 실행된다.

var fs = require('fs');

// 정석적인 readFile 구조
fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err);

    console.log(data.toString());
    // 콜백함수 안에서는 순서대로 처리한다.
    console.log('1')
    console.log('2')

});

console.log("finished program")

// 결과물
// finished program
// Tutorials POint is giving self learning contetn
// to teach the world in simple and easy way!!!!!!

// fs모듈로 읽어오라고 시키고 콘솔을 먼저 찍음(비동기 처리). 
// 그리고 나서 콜백함수를 실행하여 읽어온 파일을 출력



















