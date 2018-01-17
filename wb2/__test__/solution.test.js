'use strict';

const solution = require('../lib/solution.js');
console.log('solution is what?', solution);

describe('Solution Module', function() {

  it('should return null for an non-array input', function() {

    expect(solution('string')).toBe(null);

  })

  it('should return null for a non-numeric input', function() {

    expect(solution(['one', 2, 3])).toBe(null);

  })

  it('should return null for an array length of less than 2', function() {

    expect(solution([1])).toBe(null);

  })

  it('should return non-duplicate values for highest and next higest values', function() {

    expect(solution([3, 5, 7, 11, 11])).toEqual({high: 11, nextHigh: 7});

  })

  it('should return non-duplicate values for highest and next higest values', function() {

    expect(solution([3.33, 5, 7, 7.7, 11])).toEqual({high: 11, nextHigh: 7.7});

  })

})
