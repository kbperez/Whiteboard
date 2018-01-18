'use strict';

const traverse = require('../lib/solution.js');

describe('Traverse Module', function() {

  it('should return null for an non-object input', function() {

    expect(traverse('string')).toBe(null);

  })

  it('should accept integers for the passenger values', function() {

    expect(traverse({value: 1, next: null})).toBe(1);
    expect(traverse({value: 1.3, next: null})).toBe('only integers');

  })

  it('should return correct headcount', function() {

    expect(traverse({value: 2, next:{value: 3, next:{value: 4, next: null}}})).toBe(9);

  })

})
