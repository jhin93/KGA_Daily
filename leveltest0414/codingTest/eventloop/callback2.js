// 싱글쓰레드말고 백그라운드 쓰레드(settimeout이 기다리는 곳)를 조작하는 방법은 3가지
// callback, promise, async/await

// function avante(callback) {
//     setTimeout(() => {
//         console.log('avante go')
//         callback()
//     }, 1000)
// }

function avante(callback) {
    return new Promise((resolve, reject)=>{ // promise가 setTimeout처럼 백그라운드로 들어감.
        setTimeout(()=>{
            resolve('avante go')
        }, 1000)
    })
}

function sonata(callback) {
    return new Promise((resolve, reject)=>{ // promise가 setTimeout처럼 백그라운드로 들어감.
        setTimeout(()=>{
            resolve('sonata go')
        }, 2000)
    })
}

function genesis(callback) {
    return new Promise((resolve, reject)=>{ // promise가 setTimeout처럼 백그라운드로 들어감.
        setTimeout(()=>{
            resolve('genesis go')
        }, 3000)
    })
}

// avante().then((data)=>{
//     console.log(data)
//     return sonata()
// })
// .then((data)=>{
//     console.log(data)
//     return genesis()
// })
// .then((data)=>{
//     console.log(data)
// })

async function car(){
    const result = await avante()
    console.log(result)
    const result2 = await sonata()
    console.log(result2)
    const result3 = await genesis()
    console.log(result3)
}

// async 가 붙은 함수는 백그라운드(관리하는 싱글 쓰레드가 아닌)에 들어감.
// async는 무조건 프로미스 객체를 결과로 반환한다.


car()

// function sonata(callback) {
//     setTimeout(() => {
//         console.log('sonata go')
//         callback()
//     }, 2000)
// }

// function genesis(callback) {
//     setTimeout(() => {
//         console.log('genesis go')
//     }, 3000)
// }

// avante(()=>{sonata(genesis)})


// 아반때, 소나타, 제네시스를 비동기면서 차례대로 실행하려면?

// function carRacing() {
//     avante(() => {
//         sonata(()=>{
//             genesis()
//         })
//     })
// }

// carRacing()

