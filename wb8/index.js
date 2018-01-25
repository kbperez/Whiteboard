'use strict';

const SLL = require('./sll');
const solution = require('./solution');

let list1= new SLL;
list1.insertHead(1);
list1.insertEnd(7);
list1.insertEnd(8);
list1.insertEnd(12);

let list2 = new SLL;
list2.insertHead(7);
list2.insertEnd(7);
list2.insertEnd(83);
list2.insertEnd(12);

solution(list1, list2);
