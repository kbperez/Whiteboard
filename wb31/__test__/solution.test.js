'use strict';

const solution = require('../lib/solution');
require('jest');

let one=[ 3.14, 6, 'dog', 'cat'];
let two=['cat', 7, 3.14, 'cat'];

describe('valid output type', () => {
  it('should return a new array', () => {
    expect(Array.isArray(solution(one, two))).toBeTruthy();
  });
});

describe('valid output', () => {
  it('should return the correct answer', () => {
    expect(solution(one, two)).toEqual([ 'cat', 3.14 ]);
  });
});

describe('invalid input', () => {
  it('should return null if missing input', () => {
    expect(solution()).toBeNull;
  });
  it('should return a message if input is not an array', () => {
    expect(solution('string')).toEqual('Input must be an array');
  });
});
