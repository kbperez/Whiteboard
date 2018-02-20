
'use strict';

const utils = require('./lib/utils');

console.log('Map: ', utils.map([1, 2, 3], val => val * 2));

console.log('Filter: ', utils.filter([1, 2, 3], val => val > 1));

console.log('Reduce: ', utils.reduce([1, 2, 3], (acc, cur) => acc + cur, 4));
