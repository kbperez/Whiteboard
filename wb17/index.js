'use strict'
const solution = require('./lib/solution');
const Ktree = require('./lib/kary-tree');

let test = new Ktree();

test.insert(1);
test.insert(2, 1);
test.insert(3, 1);
test.insert(4, 2);

console.log('solution', solution(test));
