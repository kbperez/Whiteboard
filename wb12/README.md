## Day 12 whiteboard challenge

Implement a Queue using only two Stacks

### Installation
This project requires Node JS.
Run *npm init* to set up program dependancies.
Use *npm i -D jest eslist* to install developer dependancies for testing and linter.


## Accessing each method
### The queue constructor in queue.js and 2 methods - enqueue and dequeue.

let Queue = require('./lib/queue');
_Construct a enqueue_
let testQueue = new Queue;
_Access the queue methods_
testQueue.enqueue(4);

testQueue.dequeue();

### Running tests
From the command line, type *npm run test* to start testing.
