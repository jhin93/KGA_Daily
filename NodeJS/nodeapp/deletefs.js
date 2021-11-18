// 파일 삭제 fs.unlink

const fs = require('fs');

console.log('delete a delete.txt file!!!!\n')


// delete.txt 파일 삭제
fs.unlink('delete.txt', (err) => {
    if(err) return console.error(err);

    console.log('delete.txt file is deleted successfully!!!\n')
})































