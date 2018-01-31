'use strict';

const Stack = require('./stack'); //require in stack.js functionality

module.exports = class { //anonomous class
  constructor() { //set a queue constuctor using two stacks
    this.stacker = new Stack;
    this.restacker = new Stack;
  }


  enqueue(val) { //add an item to the top of the stack
    if (!val) return null;
    this.stacker.push(val); //use stack push method
  }

  dequeue() {   //remove an item from the bottom of the stack
    //check that there's something in the queue
    if (this.stacker.size === 0) throw new Error('Queue is empty.');

    if (this.restacker.size === 0) { //make sure restacker is empty
      //flip the stack
      while (this.stacker.size > 0) {//take things out of stacker
        this.restacker.push(this.stacker.pop()); //put in restacker
      }
    }
    let top = this.restacker.pop(); //stor top value of original stack
    console.log('top', top);
    // re-flip the stacks
    while (this.restacker.size > 0) {//take things out of restacker
      this.stacker.push(this.restacker.pop()); //put in stacker
    }
    return top;
  }
};
