'use strict';

const solution = require('../lib/solution');
require('jest');

let testArray=[];

for (let i = 1; i < 100; i++) {
  testArray[i] = i;
}

testArray.splice(38, 1);


describe('Solution Module', function() {

  describe('Input validation', () => {

    it('should verify the input is the correct type', () => {
      expect(solution([1, 2, 3])).toEqual('Invalid input');
      expect(solution('string')).toEqual('Invalid input');
    });
  });

  describe('Functionality validation', () => {

    it('should verify the output is correct', () => {
      expect(solution(testArray)).toEqual(38);
      expect(solution(testArray)).toBeDefined();
    });
  });
});
