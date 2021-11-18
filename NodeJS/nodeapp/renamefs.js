// fs.rename 파일이름변경.

const fs = require('fs');

// 바꾸기 전 파일명, 바꿀 파일명 lorem.txt -> hello.txt
fs.rename('lorem.txt', 'hello.txt', (err) => {
    if(err) throw err;

    console.log('File rename successfully!!! \n');
})


































