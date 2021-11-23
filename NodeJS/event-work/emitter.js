
const events = require('events');
const eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("listener1 executed");
}

var listener2 = function listener2 (){
    console.log("listener2 executed");
}

var listener3 = function listener3 (){
    console.log("listener3 executed");
}
// Bind the connection event with the listener1
// add
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);
eventEmitter.on('connection', listener3);
// eventEmitter.off('connection', listener3); 삭제도 가능.
var eventListener = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event!!!");

// add는 하나의 이벤트에 여러 리스너를 지정할 때, on은 하나의 이벤트에 하나의 리스너를 지정할때.

// 결과물
// 3 Listener(s) listening to connection event!!! - add 와 on을 포함한 리스너의 수가 산출됨

eventEmitter.emit('connection');
// 결과물
// 3 Listener(s) listening to connection event!!!
// listener1 executed!!!
// listener2 executed!!!
// listener3 executed!!!


// 리스너 제거
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will be removed")

// 제거한 후의 리스너 출력
eventListener = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event!!!");
eventEmitter.emit('connection');

console.log("Finished Program")

