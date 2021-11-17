
var fs = require('fs');

console.log("Get file information");
fs.stat('input.txt', (err, stat) => {
    if(err) return console.error(err);

    console.log(stat);
    console.log("get file information success!!!");

    // stat.isFile() - Returns true if the <fs.Stats> object describes a regular file.
    // https://nodejs.org/api/fs.html#statsisfile
    console.log('is File? ' + stat.isFile());
    // .isDirectory는 stat 객체가 디렉토리인지 boolean으로 알려준다.
    // https://itinerant.tistory.com/104
    console.log('is Directory? ' + stat.isDirectory());
});

// 결과물
// Get file information
// Stats {
//   dev: 16777220,
//   mode: 33188,
//   nlink: 1,
//   uid: 501,
//   gid: 20,
//   rdev: 0,
//   blksize: 4096, - 차지하는 공간
//   ino: 45188266,
//   size: 95, - 실제 사이즈
//   blocks: 8,
//   atimeMs: 1637110282230.6978,
//   mtimeMs: 1637110280804,
//   ctimeMs: 1637110280804.4424,
//   birthtimeMs: 1637110273758.14,
//   atime: 2021-11-17T00:51:22.231Z,
//   mtime: 2021-11-17T00:51:20.804Z,
//   ctime: 2021-11-17T00:51:20.804Z,
//   birthtime: 2021-11-17T00:51:13.758Z - 생성시간
//}
// get file information success!!!
// is File? true
// is Directory? false
























