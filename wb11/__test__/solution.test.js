'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {

  describe('Input validation', () => {

    it('should verify the input is the correct type', () => {
      expect(solution([1, 2, 3])).toEqual('Invalid input');
      expect(solution('string')).toEqual('Invalid input');
    });
  });

  describe('Functionality validation', () => {
    let arr = [1, 2, 4, 5];
    it('should verify the output is correct', () => {
      expect(solution(arr)).toBe(3);
      expect(solution(arr)).toBeDefined();
    });
  });
});
