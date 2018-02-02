'use strict';

const Nd = require('./nd');

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    let nd = new Nd(val);

    if(!this.head) {
      this.head = nd;
      return this;
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

  removeNode(index) {
    if(!index || typeof index !== 'number') return null;
    if(index === 1) {
      this.head = this.head.next;
      return this;
    }
    let current = this.head, prev;
    for(var itr = 1; itr <= index; itr++) {
      if (itr === index) {
        if (current.next) {
          prev.next = current.next;
        } else {
          prev.next = null;
        }
        return this;
      }
      prev = current;
      current = current.next;
    }
  }
}

module.exports = SLL;
