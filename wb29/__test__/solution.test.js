'use strict';

const solution = require('../lib/solution');
require('jest');

let more = ['nana', 'anna', 'bear', 'karen', 'karne', 'ranek','naan', 'bare', 'ankre', 'reba'];

<<<<<<< HEAD
let morfe = ['nana', 'anna', 'naan', 'bear', 'bare', 'reba', 'karen', 'karne', 'ranek', 'ankre' ];
=======
let morfe = ['nana', 'anna', 'naan', 'bear', 'bare', 'reba', 'karen', 'karne', 'ranek', 'ankre'];
>>>>>>> af9b0e93c02dec63ae20d93eea9bfd08e8f21ba2


describe('valid output type', () => {
  it('should return a new array', () => {
    expect(Array.isArray(solution(more))).toBeTruthy();
  });
});

describe('valid output', () => {
  it('should return the correct answer', () => {
    expect(solution(more)).toEqual(morfe);
  });
});

describe('invalid input', () => {
  it('should return null if missing input', () => {
    expect(solution()).toBeNull;
  });
  it('should return a message if input is not an array', () => {
    expect(solution('string')).toEqual('Input must be an array');
  });
  it('should return a message if array elements are not strings', () => {
<<<<<<< HEAD
    expect(solution([1])).toBe('Array elements must be strings');
=======
    expect(solution([1])).toEqual('Array elements must be strings');
>>>>>>> af9b0e93c02dec63ae20d93eea9bfd08e8f21ba2
  });
});
