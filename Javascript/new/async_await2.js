function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(); 
        }, timeout);
    })
}


function testAsyncAwaitFunc()
{
    // await setTimeoutPromise(1000)
    console.log("async")
}


function testFunc1() {
    console.log('testFunc1');
}

async function compare() {
    // await testAsyncAwaitFunc(); //
    testAsyncAwaitFunc(); // 
    testFunc1(); 
}

// 함수 실행
compare();


// 결과
// compare 함수의 상태에 따라 결과가 나눠진다.

// compare 함수가 일반함수라면, 그냥 함수들이 차례대로 실행된다. 만약 함수들 중 settimeout이 걸려있다면 그게 우선적으로 적용된다.

// compare 함수가 비동기함수라면(앞에 async가 붙었다면), await 유무에 따라 다르다.
// await가 붙은 곳은 무조건 실행하고 넘어간다. 내부에 settimeout이 몇초던 간에.
// await가 내부에 아무데도 없고, 먼저 실행된 함수가 비동기함수라면(async가 붙은) 일반 함수가 먼저 결과를 도출한다. 그리고 비동기 함수(async가 붙은)가 결과를 도출한다.


