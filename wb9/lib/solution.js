'use strict';
const SLL = require('./sll');

const solution = module.exports = function (offset, list) {
  if (!offset || !list) return null; //check for no input
  if ((typeof offset !== 'number') || !(list instanceof SLL)) return null; //if input is not linked list
  let retList = list; //declare return sll
  let length = 0; //set up a length counter
  //iterate through list, counting its length
  for (let i = list.head; i; i = i.next) {
    length++;
  }
  if (length === 1) return 'There is only one item in the test.  No offset is possible.';
  let counter = length-offset;
  if (counter <= 1) return 'The offset value is longer that the list.';
  //build the return linked
  for (let j = list.head; j; j = j.next) {
    console.log('j', j);
    counter--;
    retList = j;
    console.log('ret', retList);
    console.log('counter', counter);
    if (counter === 0) return retList;
  }

};
