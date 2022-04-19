// settimeout은 콜스택이 아닌 비동기만을 처리하는 쓰레드에 들어간다. 그래서 다음 함수가 실행된다.

function a (callback) {
    setTimeout(time2, 0)
    console.log('hello world')
    setTimeout(time, 0)
    callback() // 5
}


console.log(3)

function time2() {
    console.log('hi')
}

function time() {
    console.log('5')
}

a(time)

// event loop
// 얇코 
// 제로초