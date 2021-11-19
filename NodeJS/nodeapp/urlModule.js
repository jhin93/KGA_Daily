
const url = require('url');
const addr = 'http://localhost:3000/default.html?year=2021&month=Oct'


var qString = url.parse(addr, true); // 문자열로도 파싱이 가능하다

console.log(qString.host);
console.log(qString.pathname);
console.log(qString.search + `\n`);

var data = qString.query;
console.log(data);
console.log(data.month);



















