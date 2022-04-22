

async function testAsyncAwaitFunc()
{
    setTimeout(() => {
        console.log("async")
     }, 1000);
    
}


// 함수 실행
// testAsyncAwaitFunc();



function testFunc1() {
    setTimeout(() => {
        console.log('testFunc1');
    }, 500);
}

async function compare() {
    await testAsyncAwaitFunc(); // 1초
    testFunc1(); // 0.5 초

}

// 함수 실행
compare();


// 결과
// testAsyncAwaitFunc 함수 내부는 await를 어떻게 하든 간에,
// 나중에 실행한 testFunc1이 먼저 실행된다.
// 그 이후 testAsyncAwaitFunc 에서 await에 따라 실행 순서가 바뀐다.