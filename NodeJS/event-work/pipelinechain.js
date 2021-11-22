const fs = require("fs");
// zlib : 오픈소스 라이브러리
const zlib = require("zlib");

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip()) // Gzip이라는 압축 알고리즘
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('Finished multiple pipeline zlib');




