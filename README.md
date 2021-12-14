# KGA_daily
그날 배운 것을 올리는 매일 1커밋 하는 공간입니다.  


css - position.  
https://ofcourse.kr/css-course/position-%EC%86%8D%EC%84%B1  


vscode 단축키  
https://blog.naver.com/jiwon3194/222512040766  



반복문 사용 시, 무한 루프가 돌때는 연산자가 제한범위안에 제대로 있는 지 확인할 것.  
```
while( i < 10 ) {  
  if((i % 2) == 0){  
    text += "<br>
    The number is " + i;  
  }  
  i++;  
}  
```

Math.abs()  
Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs  


form태그의 action = # 의 의미  
https://stackoverflow.com/questions/8862035/what-does-it-mean-when-the-form-action-attribute-is-number-pound-symbol-sig/8862207#8862207  


자바스크립트 label  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label  


NodeJS  
nvm 설치 및 버전확인 및 변경  
https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1  




nvm ls  
nvm 버전 확인  

nvm 버전사용  
nvm nvm use 버전(ex nvm use 16.13.0)

빌트인 모듈은 따로 설치를 안해줘도 사용가능하다 (ex http)




REPL 터미널  
read eval print loop  

var를 선언하고 값을 할당하면 값이 저장되지만,  
출력이 되지는 않는다. 그래서 undefined가 뜸.  
> var y = 10  
undefined  

밑줄을 사용하여 마지막 결과를 얻을 수 있다.
var sum = _ 는 위에서 더한 결과를 담는다.


npm install할때는 -save 옵션을 붙일 것.  
npm install -s 모듈. npm install 모듈 -save  
그래야 package.json의 dependencies에서 관리가 됨.  

npm uninstall 모듈명  
npm search 모듈명  

npm init - package.json을 생성함.  

Buffer의 개념.  
https://tk-one.github.io/2018/08/28/nodejs-buffer/  
https://www.youtube.com/watch?v=BsWWPhM8Lvk  

readFilfe, readFileSync  
https://balmostory.tistory.com/33  

파일시스템(fs.open)  
https://psyhm.tistory.com/15  

tcp ip  
https://aws-hyoh.tistory.com/entry/TCPIP-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

url.parse()  
URL 문자열을 입력하면 URL 객체를 만든다. 만든 url 객체에서 pathname 키의 밸류를 가져옴. https://gongbu-ing.tistory.com/9  

url.parse에 줄이 생기는 이유는 더이상 사용하지 않으니 추천하지 않는다  
https://velog.io/@satoshi25/url.parse-deprecated  

nodejs .on 메소드
https://stickie.tistory.com/66

https://www.wenyanet.com/opensource/ko/604a5b03e303543c092ca57f.html#zip-single-folder  
zip-lib - 노드에 대한 zip 및 unzip 라이브러리  


Promise  
https://elvanov.com/2597  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises  

콜백 함수를 전달해주는 고전적인 방식과는 달리, Promise는 아래와 같은 특징을 보장합니다.  
callback 방식보다 Promise 방식이 비동기 작업에 대해 훨씬 쉽고 직관적으로 코딩할 수 있다고 생각합니다.  
  콜백의 장단점  
1. 콜백은 자바스크립트 Event Loop이 현재 실행중인 콜 스택을 완료하기 이전에는 절대 호출되지 않습니다.  
2. 비동기 작업이 성공하거나 실패한 뒤에 then() 을 이용하여 추가한 콜백의 경우에도 위와 같습니다.  
3. then()을 여러번 사용하여 여러개의 콜백을 추가 할 수 있습니다. 그리고 각각의 콜백은 주어진 순서대로 하나 하나 실행되게 됩니다.  
  .then() / .catch  
Promise 의 특징은 new Promise(...) 하는 순간 여기에 할당된 비동기 작업은 바로 시작됩니다.  
비동기 작업의 특징은 작업이 언제 끝날지 모르기 때문에 일단 배를 떠나보낸다고 이야기했습니다.  
그럼 그 이후에 이 작업이 성공하거나 실패하는 순간에 우리가 또 뒷처리를 해줘야겠죠?  
Promise 가 끝나고 난 다음의 동작을 우리가 설정해줄 수 있는데, 그것이 바로 then 메소드와 catch 메소드입니다.  

```
function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve();
    else reject();
  });
}

setTimeout(() => {
  const promise1 = startAsync(25);
  promise1
    .then(() => {
      console.log("1 then!");
    })
    .catch(() => {
      console.log("1 catch!");
    });
  const promise2 = startAsync(15);
  promise2
    .then(() => {
      console.log("2 then!");
    })
    .catch(() => {
      console.log("2 catch!");
    });
}, 1000);

// 결과  
1 then!  
2 catch!  
```
```
function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve(`${age} success`);            // 위의 예시와 다르게 resolve와 reject에 인자가 들어가있다
    else reject(new Error(`${age} is not over 20`));
  });
}

setTimeout(() => {
  const promise1 = startAsync(25);
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
  const promise2 = startAsync(15);
  promise2
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}, 1000);

//결과

25 success
Error: 15 is not over 20
    at /home/taehoon/Desktop/playground-nodejs/index.js:4:17
    at new Promise (<anonymous>)
    at startAsync (/home/taehoon/Desktop/playground-nodejs/index.js:2:10)
    at Timeout._onTimeout (/home/taehoon/Desktop/playground-nodejs/index.js:17:20)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
```

async 함수  
async 함수는 Promise 와 굉장히 밀접한 연관을 가지고 있는데, 기존에 작성하던 executor 로부터 몇 가지 규칙만 적용한다면  
new Promise(…) 를 리턴하는 함수를 async 함수로 손쉽게 변환할 수 있습니다.  

1. 함수에 async 키위드를 붙입니다.  
2. new Promise... 부분을 없애고 executor 본문 내용만 남깁니다.  
3. resolve(value); 부분을 return value; 로 변경합니다.  
4. reject(new Error(…)); 부분을 throw new Error(…); 로 수정합니다.  

```
// 바로 위 예시를 async 함수로 표현하면 다음과 같다.
async function startAsync(age) {
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}
```

await 함수  
await: Promise 가 끝날 때까지 기다린다.  
await 는 Promise 가 fulfilled 가 되든지 rejected 가 되든지 아무튼 간에 끝날 때까지 기다리는 함수입니다.  
async 함수에서만 사용할 수 있습니다.  

특성  
1. 문법적으로 await [[Promise 객체]] 이렇게 사용합니다.
2. await 은 Promise 가 완료될 때까지 기다립니다. 
3. await 은 Promise 가 resolve 한 값을 내놓습니다.
4. 해당 Promise 에서 reject 가 발생한다면 예외가 발생합니다.

```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();

/*
함수를 호출하고, 함수 본문이 실행되는 도중에 (*)로 표시한 줄에서 실행이 잠시 '중단’되었다가 프라미스가 처리되면 실행이 재개됩니다. 
이때 프라미스 객체의 result 값이 변수 result에 할당됩니다. 따라서 위 예시를 실행하면 1초 뒤에 '완료!'가 출력됩니다.
*/
```

axios 사용법  
https://velog.io/@april_5/TIL43-Axios-%EC%82%AC%EC%9A%A9%EB%B2%95#axiosput

Axios vs fetch  
https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-Ajax%EC%99%80-Axios-%EA%B7%B8%EB%A6%AC%EA%B3%A0-fetch#fetch-1  


전역변수  
var, let, const 등을 쓰지 않고 선언한 변수는 '전역변수'이다.  
즉 어디서나 불러서 사용할 수 있음.  
```
function calc (a, b) {
  let sum1 = a + b;
  sum2 = a + b;
  return sum1;
}

console.log(calc(20,30)) // 50  
console.log(sum2) // 50  
sum1 // Uncaught ReferenceError: sum1 is not defined  
```

인스턴스  
```
let student = {
  'id' : 123,
  'class' : Higher
  .
  .
  .
}
// 인스턴스는 student.
```

try catch문  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch  
 
try_statements : 실행될 선언들  
catch_statements : try 블록에서 예외가 발생했을 때 실행될 선언들  
exception_var : catch 블록과 관련된 예외 객체를 담기 위한 식별자  
finally_statements : try 선언이 완료된 이후에 실행된 선언들. 이 선언들은 예외 발생 여부와 상관없이 실행된다.  

npm multer 모듈
https://jamong-icetea.tistory.com/133


connection Pool 개념  

- 데이터베이스에 연결된 Connection을 미리 만들어 둔후 Pool에 보관하였다가 필요할 때 Pool에서 Connection을 가져다 사용한 후, 다시 Pool에 반환하는 기법입니다. Connection Pool을 이용하면 여러 Connection을 이용할 수 있기 때문에 더 큰 부하를 견딜 수 있습니다.  
- 또한 기존처럼 필요할때 마다 Connection을 생성하고 닫지 않아도 되기 때문에 어플리케이션의 성능향상 또한 기대할 수 있습니다.  

https://techbless.github.io/2020/01/17/Node-js%EC%97%90%EC%84%9C-Mysql-Connection-Pool-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0/  
https://velog.io/@gwon713/Nodejs-MySQL-DB-connection-pool  
https://darrengwon.tistory.com/688  

sort 메소드  
sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.  
https://webclub.tistory.com/110  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sortㅇ
오름차순 정렬  
배열.sort((a, b) => a - b);  

dotenv 모듈
https://www.daleseo.com/js-dotenv/

```
// 1. env파일 생성하여 환경변수 설정
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

// 2. .config() 함수를 호출
require("dotenv").config();

// 3. process.env로 변수 사용 가능.
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
```

.urlencoded({ extended : false })  
https://velog.io/@hyunju-song/body-parser%EC%9D%98-urlencoded%EB%8A%94-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%96%B4%EB%96%A4-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%98%EB%8A%94-%EA%B1%B8%EA%B9%8C  


fetch() 함수 사용법  
https://yeri-kim.github.io/posts/fetch/  

```
fetch('https://api.google.com/user/3')
  .then(res => res.json())
  .then(res => {
    if (res.success) {
        console.log(`${res.user.name}` 님 환영합니다);
    }
  });
```

미들웨어  
https://psyhm.tistory.com/8  


.env과 dbconfig.json 차이
.json은 객체 한 덩어리로 전달되지만, .env는 설정한 변수가 한 줄 단위로 사용된다.

addEventListner  
https://opentutorials.org/course/1375/6761  



  리액트(12/13 ~ )

함수형 컴포넌트 vs 클래스형 컴포넌트
https://devowen.com/298




