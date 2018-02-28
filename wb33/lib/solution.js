'use strict';

const solution = module.exports = function(base, exp) {
  //validate input
  if ((base || exp)=== undefined) return null;
  if ((typeof base && typeof exp) !== 'number') return 'Input must be 2 numbers';

  //calculate the integer absolute value of the exponential operation and make array of string values
  let inprocess = Math.floor(Math.abs(Math.pow(base, exp))).toString().split('');
  console.log(inprocess);

  let sum = 0;
  for (let i=0; i < inprocess.length; i++) {
    sum =  sum + parseInt(inprocess[i]);
  }

  return sum;
};
