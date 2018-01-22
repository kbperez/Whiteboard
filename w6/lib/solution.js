'use strict';
const solution = module.exports = {};

solution.loop = function(count, cb) {

  if (!count && !cb) return null; //check that parameters are passed
  if (!Number.isInteger(count)) return null; //check that count is an integer

  cb(count); //invoke callback

  if (!count) return undefined;
  count--;
  solution.loop(count, cb);
};

// solution.loop(3, fn => console.log(fn));
