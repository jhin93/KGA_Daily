function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(); 
        }, timeout);
    })
}

// async await
async function timeoutCheckAdult(age, timeout) {
    
    await setTimeoutPromise(timeout);
    console.log(`${age}. timeoutCheckAdult`);

    if (age > 20) return true;
    return false;
}



function testAsyncAwaitFunc()
{
    // timeoutCheckAdult(10, 5000);
    // timeoutCheckAdult(20, 3000);
    // timeoutCheckAdult(30, 1000);

    // 아래 문장들은 차례로 실행된다. wait 하는 것. 바로 위 3문장과는 결과가 다르다.

    timeoutCheckAdult(10, 5000); 
    timeoutCheckAdult(20, 3000);
    timeoutCheckAdult(30, 1000);
}


// 함수 실행
testAsyncAwaitFunc();



function testFunc1() {
    console.log('testFunc1()');

    let startTime = new Date().getTime();
    while(new Date().getTime() - startTime < 100);

    testFunc2();
}

function testFunc2() {
    console.log('testFunc2()');
}

// 함수 실행
testFunc1();


// 결과
// testAsyncAwaitFunc 함수 내부는 await를 어떻게 하든 간에,
// 나중에 실행한 testFunc1이 먼저 실행된다.
// 그 이후 testAsyncAwaitFunc 에서 await에 따라 실행 순서가 바뀐다.