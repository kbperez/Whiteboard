
'use strict';

const utils = require('./lib/utils');

let cbMap = function(x) {
  return x * 2;
};

let cbFilter = function() {
  return 2;
};

let cbReduce = function(a, b) {
  return a + b;
};

console.log('Map: ', utils.map([1, 2, 3], cbMap));

console.log('Filter: ', utils.filter([1, 2, 2, 3, 2], cbFilter));

console.log('Reduce: ', utils.reduce([1, 2, 3], cbReduce, 0));
