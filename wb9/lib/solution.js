'use strict';
const SLL = require('./sll');

const solution = module.exports = function (offset, list) {
  if (offset !== 0 && !offset || !list) return null; //check for no input
  if ((typeof offset !== 'number') || !(list instanceof SLL)) return null; //if input is not linked list
  let length = 0; //set up a length counter
  let counter = 0;
  //iterate through list, counting its length
  for (let i = list.head; i.next; i = i.next) {
    length++;
  }
  console.log(offset, length);
  if (length <= 1) return 'There is only one item in the test. No offset is possible.';
  counter = length - offset;
  if (counter <= 1) return 'The offset value is longer that the list.';
  //build the return linked

  for (var j = list.head; counter; j = j.next) {
    counter--;
  }
  return j;
};
