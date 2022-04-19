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

avante().then((data)=>{
    console.log(data)
    return sonata()
})
.then((data)=>{
    console.log(data)
    return genesis()
})
.then((data)=>{
    console.log(data)
})



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

