
// 이벤트 모듈, 메소드
const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("connection success!!!");

    eventEmitter.emit('data_received');
}


// 여기서 콜백함수가 실행.
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
    console.log('data received success!!!');
});

// 실행은 여기서 한번만 됨. 여기서 모든 콘솔이 찍힘.
eventEmitter.emit('connection'); 

console.log("Program finished!!!")


// 결과물
// connection success!!!
// data received success!!!
// Program finished!!!










