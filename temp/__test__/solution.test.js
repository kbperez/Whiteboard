'use strict';

const solution = require('../lib/solution');
require('jest');

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let rematrix = [[7, 4, 1], [8, 5, 2], 9, 6, 3];


describe('valid output type', () => {
  it('should return a new array', () => {
    expect(Array.isArray(solution(matrix))).toBeTrue();
  });

});

describe('valid output', () => {
  it('should return the correct answer', () => {
    expect(solution(matrix).toEqual(rematrix));
  });
});

describe('invalid input', () => {
  it('should return null if missing input', () => {
    expect(solution()).toBeNull();
  });
  it('should return a message if input is not an array', () => {
    expect(solution('string')).toBe('Input must be an array');
  });
});
