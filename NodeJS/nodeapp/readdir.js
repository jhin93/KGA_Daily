const fs = require('fs');

console.log("Reading directory!!!!\n");
fs.readdir('./temp/hellodir', (err, files) => {
    if(err) throw err;

    // forEach문. files는 배열의 형태이다.
    files.forEach((file) => {
        console.log(file);
    })
})

// 결과물

/*
Reading directory!!!!

hello.txt
helloworld.html
input copy.txt
input.txt
 */
































