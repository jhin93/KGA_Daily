function ingoo() {
    console.log('3')
    return 4
}

function goak() {
    console.log('1')
    return ingoo()
}

function hello(callback) {
    goak()
    console.log('5')
    callback('6')
}

const result = ingoo()
hello(goak)
console.log(typeof result)

// callstack