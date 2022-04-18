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
console.log(varName); 

if(true)
{
    // 다른 영역
    var varName = "kimjinkyung"; // 한번 더 선언 및 초기화 가능.
}
console.log(varName); // 위의 if문에 새롭게 선언 및 초기화한 내용이 출력된다. 이게 var의 문제점.
// 전역변수가 많다는 건, 선언한 시점에서 프로젝트가 종료될떄까지 메모리를 잡아먹기에 좋은게 아니다

let letName; 
const constName = "jinkyung";




