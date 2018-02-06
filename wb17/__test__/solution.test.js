'use strict';
const solution = require('../lib/solution');
const Ktree = require('../lib/kary-tree');
console.log(solution)
require('jest');

let test = new Ktree();

test.insert(1);
test.insert(2, 1);
test.insert(3, 1);
test.insert(4, 2);

console.log('test input', test);
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
      expect(solution(test)).toBe(10);
      expect(typeof solution(test)).toEqual('number');
    });
  });
});
