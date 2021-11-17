
const fs = require('fs');
const buf = Buffer.alloc(1024);


console.log('Starting gugudan...\n')

// 구구단 함수
// 세로출력

function gugudanCero(){
    let multi;
    // 값을 안준 상태(ex let result;)에서 값을 더하면 undefined 뜸.
    var result = '';
    for(let i = 1; i < 10; i ++){
        for(let j = 1; j < 10; j ++){
            multi = i*j;
            result += i + ' * ' + j + ' = ' + multi + '\n';
        }
        result += '\n'
    }
    // console.log(result);
    return result
}



// file.open. w+ 옵션을 사용하여 파일이 없다면 새로 생성.
fs.open('gugudan.txt', 'w+', (err, fd) => {
    // 에러처리
    if(err) return console.error(err);

    // file write
    fs.writeFile('gugudan.txt', gugudanCero(), (err) => {
        if(err) return console.error(err);

        // file.read
        // fd: 파일 디스크럽터. fs.open함수에서 얻을 수 있다. err: 에러, bytes: 읽어들인 문자열 길이, bf: 읽은 문자열이 담긴 버퍼
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, bf) => {
            // 에러처리
            if(err) return console.error(err);
            console.log('버퍼 원본 \n', bf) //  읽은 문자열이 담긴 버퍼 확인
            
            // 0부터 읽은 만큼(bytes) 출력
            if(bytes > 0) console.log(buf.slice(0, bytes).toString());

            // 열린 file descriptor를 close. 그래야 해당 파일(fd)이 더 이상 다른 로직에 의해 영향받지 않는다.
            // https://www.geeksforgeeks.org/node-js-fs-close-method/
            fs.close(fd, () => {
                // 에러처리
                if(err) return console.error(err);
                console.log("gugudanCero.txt was closed successfully!")
            })
        })
    })
});
































