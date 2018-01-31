'use strict';

let Queue = require('./lib/queue');

let testQueue = new Queue;

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.dequeue();
testQueue.enqueue(4);
testQueue.enqueue(4);
testQueue.enqueue(5);
testQueue.dequeue();
console.log('queue', testQueue);
