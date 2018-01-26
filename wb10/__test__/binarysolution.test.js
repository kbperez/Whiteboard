'use strict';

const solution = require('../lib/binarysolution');
require('jest');

describe('Solution Module', function() {

  describe('Input validation', () => {
    it('should verify the input exists', () => {
      expect(solution()).toBeNull();
    });
    it('should verify the input is the correct type', () => {
      expect(solution(1, 'array')).toBeNull();
      expect(solution('one', [1, 2, 3])).toBeNull();
    });
    it('should verify the argument are input correctly', () => {
      expect(solution([1, 2, 3], 3)).toBeNull();
      expect(solution('one', [1, 2, 3])).toBeNull();
    });

  });

  describe('Functionality validation', () => {
    it('should verify the output correct', () => {
      expect(solution(1, [1, 2,3])).toBeInstanceOf(Object);
      expect(solution(1, [1, 2,3])).toEqual({value: 1, index:0});

    });
  });
});
