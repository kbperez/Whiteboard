'use strict';

const SLL = require('./lib/sll');
const Nd = require('./lib/nd');
const solution = require('./lib/solution');

let list= new SLL;
list.insertHead(1);
list.insertEnd(7);
list.insertEnd(7);
list.insertEnd(12);
list.insertEnd(7);

console.log('list', list.head);

solution(list.head);
