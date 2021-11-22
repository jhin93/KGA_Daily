
const fs = require("fs");
const zlib = require("zlib");
const zl = require("zip-lib");

// 과제 목적 : Stream을 이용하여 여러 파일을 복사. 복사한 파일은 zlib 모듈로 압축할 것.
// 구현 방법 : forEach문으로 반복되는 환경을 구축하고, 그 안에서 pipe()를 사용한다.


// 소스 디렉토리 읽어오기.

fs.readdir('./source', (err, files) => {
    if(err) console.error(err);
    console.log("디렉토리 내부의 파일 배열", files);

    // 파일복사.
    // files 배열에 foreEach문 적용.
    var sourcePath = '';
    var targetPath = '';
    files.forEach((file) => {
        sourcePath = "./source/" + file;
        targetPath = "./target/" + file;
        let readerStream = fs.createReadStream(sourcePath);
        let writeStream = fs.createWriteStream(targetPath);
        readerStream.pipe(writeStream);
    })
})

// zip-lib 이란 모듈을 설치. source 폴더를 압축하여 zip 파일을 target 폴더에 생성
zl.archiveFolder("./source", "./target/tartget.zip")







