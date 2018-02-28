'use strict';

const solution = require('../lib/solution');
require('jest');

describe('valid output type', () => {
  it('should return a number', () => {
    expect(solution(1,2)).toBeTruthy();
    expect(typeof solution(1,2)).toBe('number');
  });
});

describe('valid output', () => {
  it('should return the correct answer', () => {
    expect(solution(2,3)).toEqual(8);
    expect(solution(-1,2)).toEqual(1);
    expect(solution(2.5, 8.6)).toEqual(16);
  });
});

describe('invalid input', () => {
  it('should return null if missing input', () => {
    expect(solution()).toBeNull;
    expect(solution(1)).toBeNull;

  });
  it('should return a message if input is not a number', () => {
    expect(solution(3, '2')).toEqual('Input must be 2 numbers');
    expect(solution('three', 'two')).toEqual('Input must be 2 numbers');
    expect(solution(-7, 0.5)).toEqual('Cannot calcuate fractional exponents of negative numbers');
    expect(solution(0, -0.5)).toEqual('Cannot divide by zero');
  });
});
