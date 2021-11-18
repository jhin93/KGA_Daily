

const fs = require("fs");

console.log("Remove Directory!!!\n");

// remdir는 빈 폴더만 삭제 가능하다.rmdir은 err만 받는다
fs.rmdir('./temp/hellodir', (err) => {
    if(err) throw err;

    // 지워졌는지 확인
    fs.readdir('./temp/', (err, files) => {
        if(err) throw err;

        // 폴더만 삭제되고 파일만 남음
        files.forEach((file) => {
            console.log(file);
        });
    });
});
































