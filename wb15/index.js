'use strict'
const solution = require('./lib/solution');
const Ktree = require('./lib/kary-tree');

let test = new Ktree();

test.insert(15);
test.insert(21, 15);
test.insert(3, 15);
test.insert(43, 21);

solution(test);
