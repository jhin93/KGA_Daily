

const events = require('events');
const eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log("I hear a scream!!!");
}

// 이벤트 트리거
eventEmitter.on('scream', myEventHandler);

// 이벤트 발생
eventEmitter.emit('scream');




