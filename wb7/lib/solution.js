'use strict';

const solution = module.exports = function(list) {

  if (!list) return null; //check for no input
  if (!Object.keys(list).length) return null; // check for an empty object

  let copy = Object.assign({}, list);//create a copy

  while (copy.next) {
    if (copy.seen) return true; //this is a circular list
    copy.seen = true; //I've seen this node before
    copy = copy.next;
    if (copy.next === null) return false;
  }
};
