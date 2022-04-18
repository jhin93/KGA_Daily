alert("start javascript!!");

//변수명 이름 규칙
/*
    1. 알파벳, _, -, 숫자 (한글, 특수문자, 일본어 이런거 쓰지 말자)
        1_1. 숫자가 제일 앞에 올 수 없다.
    2. camel 표기법
        ex) let myVeryLongLongName;
    3. 대소문자를 구분한다. 
 */

console.log(varName); // undefined. 메모리는 잡혔지만 초기화가 안되서 undefined임.
// 호이스팅. 자바스크립트 엔진 1. 변수 선언이 이루어짐 2. 런타임에서 사용이 됨
var varName = "test"; // 가장 오래된 버전에서 사용하는 변수 타입
console.log(varName); // 
let letName; 
const constName = "jinkyung";




