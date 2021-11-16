
// 아스키 코드화 해주는 메소드.
// https://shaeod.tistory.com/228
// var buf = Buffer.from('abc'); // <Buffer 61 62 63>
// var buf = Buffer.alloc(15, 'a'); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
var buf = Buffer.allocUnsafe(15); // unsafe는 0으로 초기화하지 않는다.
buf.fill(10);
console.log(buf);
















