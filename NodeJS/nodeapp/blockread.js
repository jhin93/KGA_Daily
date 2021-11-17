// blocking 코드 예시.
// 코드를 순서대로 실행한다. 동기처리.


// 파일 입출력 모듈 fs.
var fs = require('fs');
// readFile - 비동기
// .readFileSync - 동기
// https://balmostory.tistory.com/33
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program finished");




















