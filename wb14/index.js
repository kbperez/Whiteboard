'use strict';

const SLL = require('./lib/sll');
const Nd = require('./lib/nd');
const solution = require('./lib/solution');

let list = new SLL;
list.insertHead(7);
list.insertHead(12);
list.insertHead(7);
list.insertHead(7);
list.insertHead(1);

solution(list);
