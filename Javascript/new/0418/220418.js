alert("start javascript!!");

// 숫자형
/*
    2진수. 0b로 시작
        255 -> 0b 1111 1111
            128 64 32 16 8 4 2 1 // 총합 255

        179 -> 0b 1011 0011
            128 32 16 2 1 // 총합 179

    8진수(0o).
        255 -> 0o377
        64x3 8x7 1x7
    
    16진수(0x00). 0123456789abcdef(0부터 15)
        255 -> 0x00ff
            16x15 + 15
*/

let num = 255;
console.log(num.toString(2)); // 11111111. 2진수로 표현
console.log(num.toString(8)); // 377. 8진수로 표현
console.log(num.toString(16)); // ff. 16진수로 표현

//변수명 이름 규칙
/*
    1. 알파벳, _, -, 숫자 (한글, 특수문자, 일본어 이런거 쓰지 말자)
        1_1. 숫자가 제일 앞에 올 수 없다.
    2. camel 표기법
        ex) let myVeryLongLongName;
    3. 대소문자를 구분한다. 
 */

/* var.

    console.log(varName); // undefined. 메모리는 잡혔지만 초기화가 안되서 undefined임.
    // 호이스팅. 자바스크립트 엔진 1. 변수 선언이 이루어짐 2. 런타임에서 사용이 됨
    var varName = "test"; // 가장 오래된 버전에서 사용하는 변수 타입
    console.log(varName); 

    if(true)
    {
        // 다른 영역
        var varName = "kimjinkyung"; // 한번 더 선언 및 초기화 가능.
    }
    console.log(varName); // 위의 if문에 새롭게 선언 및 초기화한 내용이 출력된다. 이게 var의 문제점.
    // 전역변수가 많다는 건, 선언한 시점에서 프로젝트가 종료될떄까지 메모리를 잡아먹기에 좋은게 아니다
*/

/* let.

    let letName = "kjk";
    console.log(letName); // kjk
    if(true) {
        let letName = "jinkyung"; // 지역변수는 블록 스코프를 벗어나면 메모리가 해제된다.
        console.log(letName) // jinkyung
    }
    let letName = "test"; // 재선언 불가능. Identifier 'letName' has already been declared
    console.log(letName); // kjk
*/

/* const.

    // const constName; // Missing initializer in const declaration. 선언하면서 동시에 초기화를 해야만 함. 값이 수정될 일이 없는 변수
    const constName = "kjk"
    // ex) 게임에서 1스테이지 맵의 크기
    // ex) 1스테이지 보스 이름
    // ex) document를 변수로 선언할 때
    constName = "test" // const 변수는 재할당이 불가하다.  Assignment to constant variable.
    console.log(constName);

    // 빨간줄이 뜨는 건 컴파일 에러. 컴파일은 사람 언어(자바스크립트) -> 컴퓨터 언어로 번역하는 것.
    // 디버그창에 뜨는 건 런타임 에러. 번역한 컴퓨터 언어로 코드를 한줄한줄 실행하는 것.
*/
