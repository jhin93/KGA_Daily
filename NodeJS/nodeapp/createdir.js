
// 디렉토리 만들기 fs.mkdir

const fs = require('fs');
console.log("Create ./hellodir !!! \n")

fs.mkdir('./temp/hellodir', (err) => {
    if(err) throw err;

    console.log('Create directory successfully!!!\n');
})































