const fs = require('fs');
var buf = Buffer.alloc(1024);

console.log("Open input.txt file!! \n")

fs.open('input.txt', 'r+', (err, fd) => {
    if(err) console.error(err);

    console.log("input.txt open success!!!\n");
    console.log("truncate input.txt file after 20 bytes!!!\n");

    // 20바이트만큼만 남긴다는 뜻.
    fs.ftruncate(fd, 20, (err) => {
        if(err) return console.error(err);

        console.log("input.txt file trucated successfully!!!\n");
        console.log('reading input.txt file!!!\n');

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, dataBuf) => {
            if(err) return console.error(err); // 오류처리나면 그냥 리턴으로 종료
            // bytes가 0보다 크다는 건 파일이 존재해서 읽었다는 말.
            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            fs.close(fd, (err) => {
                if(err) return console.error(err);

                console.log('input.txt file closed successfully!!!')
            });
        })
    });
})




































