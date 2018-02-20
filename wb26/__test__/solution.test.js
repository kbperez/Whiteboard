'use strict';

const utils = require('../lib/utils');
require('jest');

let cbMap = function(x) {
  return x + 2;
};

let cbFilter = function() {
  return 2;
};

let cbReduce = function(a, b) {
  return a + b;
};

let arr = [1, 2, 3, 4, 5];

describe('valid map', () => {
  it('should return a new array', () => {
    expect(utils.map(arr, cbMap)).toEqual([3, 4, 5, 6, 7]);
  });
})
