'use strict';

const solution = require('../lib/checkbracesolution');
require('jest');

describe('Solution Module', function() {

  describe('Input validation', () => {
    it('should verify the input exists', () => {
      expect(solution()).toBeNull();
    });
    it('should verify the input is the correct type', () => {
      expect(solution(1)).toBeNull();
      expect(solution('string')).toBeDefined();
    });
  });

  describe('Functionality validation', () => {
    it('should verify the output correct', () => {
      expect(solution('hi {{there} world}')).toBe(true);
      expect(solution('hi {{there world}')).toBe(false);
      expect(solution('hi }{{there world}')).toBe(false);
    });
  });
});
