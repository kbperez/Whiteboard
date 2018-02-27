'use strict';

const solution = require('../lib/solution');
require('jest');

describe('valid output type', () => {
  it('should return an integer', () => {
    expect(Number.isInteger(solution.fibi(9))).toBeTruthy();
    expect(Number.isInteger(solution.fibr(9))).toBeTruthy();
  });
});

describe('valid output', () => {
  it('should return the correct answer', () => {
    expect(solution.fibi(4)).toEqual(3);
    expect(solution.fibr(4)).toEqual(3);
  });
});

describe('invalid input', () => {
  it('should return null if missing input', () => {
    expect(solution.fibi()).toBeNull;
    expect(solution.fibr()).toBeNull;
  });
  it('should return a message if input is not an integer', () => {
    expect(solution.fibi('string')).toEqual('Input must be an integer');
    expect(solution.fibi('string')).toEqual('Input must be an integer');
    expect(solution.fibi(0.9)).toEqual('Input must be an integer');
    expect(solution.fibi(0.9)).toEqual('Input must be an integer');
    expect(solution.fibi(-1)).toEqual('Negative values not allowed');
    expect(solution.fibi(-1)).toEqual('Negative values not allowed');
  });
});
