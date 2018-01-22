'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {

  it('should return null for no input', function() {
    let testfunction = solution.loop();
    expect(testfunction).toBe(null);
  });

  it('should return null for invalid input', function() {
    let testfunction = solution.loop(0.3, fn => console.log(fn));
    expect(testfunction).toBe(null);
  });

  it('should return return undefined when finished', function() {
    let testfunction = solution.loop(3, fn => console.log(fn));
    expect(testfunction).toBeUndefined();
  });


});
