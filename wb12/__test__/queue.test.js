'use strict';

const Queue = require('../lib/queue'); //require queue.js functionality
require('jest');

describe('Queue Data Structure Module', function () {
  beforeEach(() => this.queue = new Queue()); //create new instance of queue

  describe('default properties', () => { //test queue construcor

    it('should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
  });

  describe('#enqueue', () => { //test enque functionality
    it('should have a have the correct number of items after running enqueue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);

      expect(this.queue.stacker.size).toBe(2);
      expect(this.queue.restacker.size).toBe(0);
    });
  });

  describe('#dequeue', () => { //test dequeue functionality
    it('should return an Error if the queue is empty', () => {
      expect(() => this.queue.dequeue()).toThrowError();
    });

    it('should have a have the correct number of items after running enqueue and dequeue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.dequeue();
      this.queue.enqueue(3);
      this.queue.enqueue(4);
      this.queue.enqueue(5);
      this.queue.enqueue(6);
      this.queue.dequeue();

      expect(this.queue.stacker.size).toBe(4);
      expect(this.queue.restacker.size).toBe(0);
    });
  });
});
