'use strict';

const solution = require('../lib/solution.js');
require ('jest');

describe('Solution Module', function() {

it ('should accept two inputs', function(){

  expect(solution(['bird', 6, true])).toBe(null);
  expect(solution(['bird', 6, true], 'string', 'other string')).toBe(null);

})

  it('should only accept arrays as input', function() {

    expect(solution(['one', 2, 3], 'string')).toBe(null);
    expect(solution(['one', 2, 3], 3)).toBe(null);
    expect(solution(['one', 2, 3], ['cat', 3])).toEqual([3]);

  })

  it('should return a message if there are no matches', function() {

    expect(solution([1, 'dog'], [2, 'cat'])).toEqual('no match');

  })

  it('should return the correct answer', function() {

    expect(solution(['bird', 6, true], ['bird', 6, 'hat'])).toEqual(['bird', 6]);

  })


})
