function a(callback){
    setTimeout(time2,0)
    console.log('hello world')
    setTimeout(time,0)
    callback()
}

console.log(3)

function time2(){
    console.log('hi')
}

function time(){
    console.log('5')
}

a(time)

