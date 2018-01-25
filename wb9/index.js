'use strict';

const SLL = require('./sll');
const solution = require('./solution');

let list1= new SLL;
list1.insertHead('one');
list1.insertEnd('two');
list1.insertEnd('three');
list1.insertEnd('four');


solution(3, list1);
