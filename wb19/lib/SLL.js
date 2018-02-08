'use strict'

class Node {
  constructor(val) {
    this.val = val,
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    let nd = new Node(val);

    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    let nd = new Node(val);

    if(!this.head) {
      this.head = nd;
      return this;
    }

    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

}

module.exports = SLL
