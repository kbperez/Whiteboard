'use strict';
const solution = require('../lib/solution');
const Ktree = require('../lib/kary-tree');
const SLL = require('../lib/SLL');

console.log(solution)
require('jest');

let test = new Ktree();

test.insert(1);
test.insert(2, 1);
test.insert(3, 1);
test.insert(4, 2);
test.insert(7, 3);
test.insert(6, 3);
test.insert(5, 2);

let ans = new SLL;
ans.insertEnd(1);
ans.insertEnd(2);
ans.insertEnd(3);
ans.insertEnd(4);
ans.insertEnd(5);
ans.insertEnd(6);
ans.insertEnd(7);

let single = new Ktree();
single.insert(3);

let singleAns = new SLL;
singleAns.insertEnd(3);

describe('Solution', () => {

  describe('Invalid Input', () => {
    it('should return Error message if input in not valid', () => {
      expect(solution()).toMatch('Error - invalid input - no tree!');
      expect(solution(6)).toMatch('Error - invalid input - no tree!');
    });
  });

  describe('Valid Input', () => {
    it('should accept an object', () => {
      expect(test).toBeInstanceOf(Object);
    });
  });

  describe('Valid Output', () => {

    it('should return the correct answer', () => {
      expect(solution(test)).toBeInstanceOf(Object);
      expect(solution(single)).toEqual(singleAns);
      expect(solution(test)).toEqual(ans);
    });
  });
});
