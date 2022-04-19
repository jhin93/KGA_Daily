// 싱글쓰레드말고 백그라운드 쓰레드(settimeout이 기다리는 곳)를 조작하는 방법은 3가지
// callback, promise, async/await

function avante(callback) {
    setTimeout(callback, 1000)
}

avante(() => {console.log('avante go')}) // 1초 뒤 실행

function sonata(callback) {
    
    callback() // 콘솔로그가 콜백 아래로 가면 출력 순서가 달라짐
    console.log('sonata go')
}

function genesis() {
    console.log('genesis go')
}


// 아반때, 소나타, 제네시스를 비동기면서 차례대로 실행하려면?

function carRacing() {
    avante(() => {
        sonata(()=>{
            genesis()
        })
    })
}

carRacing()

