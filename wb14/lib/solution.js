'use strict';

const SLL = require('./sll');
const Stack = require('./stack');
const solution = module.exports = function (head) {

  let newSll = head;
  let dedupe = new SLL;
  let stacker = new Stack;

for (let i = newSll.head; i.next; i = i.next) {

  stacker.push(i.val);


};
