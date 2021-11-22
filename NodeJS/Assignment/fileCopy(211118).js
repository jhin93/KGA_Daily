const fs = require('fs');
var buf = Buffer.alloc(20480)

var pos = 0; // 읽는 위치
var remainSize = 0; // 붙여넣어질 파일의 사이즈
var srcFileName = ''; // 원본파일명
var destFileName = ''; // 복사파일명

// 원본 파일 읽어오기
fs.readdir("./source", (err, files) => {
    if (err) throw err; // 에러처리
    console.log(files);
    // forEach로 파일들에 차례대로 콜백함수를 적용
    files.forEach((file) => {
        if ("metallica_seattle.mp4" === file) { // 원본파일 일때를 조건으로 설정.

            srcFileName = "./source" + file; // 원본파일명 주소 설정
            destFileName = "./target" + file; // 복사파일명 주소 설정. 다른 디렉토리니까 ../target아닌가 싶다. 문제가 생기면 여기부터 체크
            fs.stat(srcFileName, (err, stats) => { // 파일의 정보를 읽기위해 fs.stat()사용
                if(err) throw err; // 에러처리

                remainSize = stats.size // 변수에 원본파일 사이즈 할당

                var rfd = fs.openSync(srcFileName, 'r'); // 읽기전용(r)으로 원본파일 열기
                var wfd = fs.openSync(destFileName, 'a'); // 추가 쓰기(a)로 열기. 파일이 존재하지 않으면 만들어짐. 복사파일 열기

                // 원본 데이터를 담을 변수 선언.
                var readBytes = 0;
                while(true) { // 본격적으로 복사파일에 원본 데이터를 넣기 위해 while 문 사용.
                    // fs.read(fd, buffer, offset, length, position, callback)
                    // 파일을 읽을 때 buffer 라는 임시공간에 적어놓고 읽는다. fd: 읽을 대상 / buffer: 읽기위해 읽을 것을 적는 공간 / offset: 버퍼에 데이터가 쓰여지기 시작하는 위치 / length: 버퍼를 읽을 때 length만큼씩 읽는다 / position: 데이터를 버퍼에 다 적었으면 position부터 읽는다 / callback : 이후 데이터를 다룰 콜백함수.
                    readBytes = fs.readSync(rfd, buf, 0, buf.length, pos) // rfd 파일 디스크립터에서 읽어들인 것을 buf에 임시로 작성한다. 시작위치는 0부터 작성하고 buf.length만큼씩 임시로 적어넣는다. 다 적었으면 pos부터 읽는다.
                    if(remainSize > buf.length){ // 읽어야 될 원본파일의 크기가 남은 버퍼 크기보다 클때. 즉, 막 읽기 시작해서 버퍼가 점점 차오르는 과정.
                        fs.writeFileSync(wfd, buf, 0, buf.length); // buffer를 fd에 의해 특정된 파일에 작성한다. wfd에 buffer를 적는다. 시작부터 적고(offset이 0), 버퍼길이만큼(buf.length)만큼씩 작성해넣는다.
                        pos += readBytes; // 작성했으니까 읽기 시작하는 position을 증가시킨다. 버퍼 크기만큼(20480) 증가할 것.
                        remainSize -= readBytes; // 읽을 때마다 원본 파일 사이즈에서 읽은 만큼씩 뺀다.
                    } else { // 마지막 1회에 다다랐을 때. ramainsize는 변하지 않고 버퍼의 크기가 늘어나다보면 언젠가 마지막에 다다른다.
                        fs.writeSync(wfd, buf, 0, readBytes) // 남은 readBytes 만큼 작성한다.
                        fs.closeSync(rfd); // 오픈한 것을 닫는다.
                        fs.closeSync(wfd); // 오픈한 것을 닫는다.
                        break; // while문 마무리
                    }
                }
            })

            return false; // if ("metallica_seattle.mp4" === file)의 로직을 만족시켰으면 빠져나가야됨.
        }
    })
})


