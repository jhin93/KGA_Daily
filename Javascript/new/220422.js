// 1. promiseCheckAdult 함수를 then과 catch로 구분해서 먼저 크게 작성
// promiseCheckAdult.then().catch()

// 2. 채워넣기

// 밑의 async 예시를 위해 주석처리
// function asyncCheckAdult (age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 20) resolve(age); // resolve에 age가 들어가야 then에도 age가 들어간다
//         else reject(age);
//     })
// }

// 1번째 promise
const promiseCheckAdult1 = asyncCheckAdult(10); // resolve를 먼저 처리해줌.

promiseCheckAdult1.then((age) => { 
    console.log(`${age} is adult!!`)
}).catch((age) => {
    console.log(`${age} is not adult!!`)
});

// 2번째 promise
const promiseCheckAdult2 = asyncCheckAdult(21);

promiseCheckAdult2.then((age) => { 
    console.log(`${age} is adult!!`)
}).catch((age) => {
    console.log(`${age} is not adult!!`)
});




// 비동기는 실행시켜놓고 다른 일을 할 때 쓴다.




// async await
// async는 프로미스 함수를 간략하게 만듬

async function asyncCheckAdult (age) {
    if (age >= 20) return age;
    else throw new Error(age);
}









// const promise = new Promise(() => {

// });

/*
    new Promise 호출과 동시에 비동기 처리 시작
*/
const promise = new Promise((resolve, reject) => { // new 는 런타임 중에 메모리가 할당되기 때문에, 아래 함수들 먼저 실행된다. 아래 함수들은 컴파일될때 이미 실행
    /*
        시간이 오래 걸리는 실행문 ... 5초
    */
    resolve(); // then과 매칭
    reject(); // catch랑 매칭
});


promise.then(() => {
    console.log('1. promise() then()  called');
}).catch(() => {
    console.log('2. promise() catch()  called');
})


// let a = 0;
// a();

function testFunc1() {
    console.log('testFunc1()')

    let startTime = new Date().getTime();
    while(new Date().getTime() - startTime < 1000);

    testFunc2();
}

function testFunc2() {
    console.log('testFunc2()')
}


// testFunc1 - 함수를 호출할 수 있는 포인터
testFunc1();






