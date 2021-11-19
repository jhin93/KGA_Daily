const fs = require('fs');
var buf = Buffer.alloc(2048000)

var pos = 0; // 읽는 위치
var remainSize = 0; // 붙여넣어질 파일의 사이즈
// 2개의 파일을 열어야 한다. 복사할 파일, 붙여넣을 파일

// 복사할 파일 open - read로 읽기? stat?
// 붙여넣을 파일 open - write로 붙여넣기

// 1. 붙여넣을 파일 열기
fs.open('copy.mp4', 'r', function(err, fd) {
    // 에러처리
    if(err) return console.error(err);
    // 2. 비디오 파일 내용 fs.stat()으로 가져오기.
    fs.stat('../nodeapp/metallica_seattle.mp4', (err, stat) => {
        if(err) return console.error(err);
        console.log('원본크기', stat.size);
        remainSize = stat.size // 사이즈만 먼저 확보해놓고
    })
    
    // 3. read 내에서 복사 붙여넣기 시작
    // 파일 디스크럽터 / 데이터가 쓰여질 버퍼 / 데이터가 쓰여질 버퍼의 시작 위치 / 데이터를 읽을 문자열의 크기 /  데이터를 읽을 파일의 읽기 시작할 위치 / callback 함수
    fs.read(fd, buf, 0, buf.length, pos, (err, bytes) => {
        // 에러처리
        if(err) return console.error(err);

        post += 2048; // 읽을 위치를 2048씩 늘림
        remainSize -= bytes; // 위치를 옮긴 만큼 줄어든다. 이해가 안되니까 콘솔에 찍어볼 것
        
        // 원본 사이즈가 버퍼보다 클때. 아직 더 들어가야 함.
        if(remainSize > buf.length) {
            //읽고
            //쓰고

        // 이젠 원본 사이즈가 버퍼보다 작음. 남은거 넣기
        } else {
            // while 문 사용
            //읽고
            //쓰고
            // write file close
            // break;
        }

        if(bytes > 0) console.log(buf.slice(0, bytes).toString())
    })
})