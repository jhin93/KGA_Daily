const fs = require('fs');

// fs.createReadStream
// 
var readStream = fs.createReadStream('input.txt');
// .setEncoding
// 
readStream.setEncoding('utf8')

// data 선언
var data = '';

readStream.on('data', (chunk) => {
    // createReadStream이 이벤트가 발생할 때마다 data에 chunk를 += 로 붙인다.
    data += chunk;
});

readStream.on('end', () => {
    console.log(data);
});

readStream.on('error', () => {
    // 에러처리
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack
    console.log(err);
});

console.log("ReadStream file read finished!!");








