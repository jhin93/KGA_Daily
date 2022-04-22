/*
    비동기 처리
    Promise

    동기 처리
 */

// let a = 0;
// a();

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






