'use strict';

const SLL = require('./sll');
const Stack = require('./stack');

module.exports = function (ll) {

  if (!ll) return null; //invalid input
  if(typeof ll !== 'object') return null; //invalid input
  if(ll.head === null) return null; //invalid input
  if(ll.head.next === null) return ll; //single node ll

  let dedupe = new SLL; //new list for return
  let stacker = new Stack; //new stack

  let curr = ll.head; //set pointer

  while(curr){ //iterate over ll
    if (!stacker.top) { //if stack empty push value
      stacker.push(curr.val);
    }
    console.log('top', stacker.peek());

    let checkStack = stacker.peek(); //track stack top value

    if (curr.val === checkStack.val) {//if value matches top of stack
      curr = curr.next; //move to next node
    }
    if (curr.val !== checkStack.val) {//if value does not match top of stack
      stacker.push(curr.val);//add to stack
      curr = curr.next; //move to next node
    }
  }

  //Unstack stack and construct return LL
  while(stacker.top) {
    dedupe.insertHead(stacker.pop().val);
  }
  return dedupe;
};
