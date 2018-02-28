'use strict';

const solution = module.exports = function(base, exp) {
  //validate input
  if ((base || exp)=== undefined) return null;
  if ((typeof base && typeof exp) !== 'number') return 'Input must be 2 numbers';
  //check for edge cases
  let calc = Math.pow(base, exp);
  if (isNaN(calc)) return 'Cannot calcuate fractional exponents of negative numbers';
  if (calc == Infinity) return 'Cannot divide by zero';

  //calculate the integer absolute value of the exponential operation and make array of string values
  let inprocess = Math.floor(Math.abs(Math.pow(base, exp))).toString().split('');
  //check for another edge case
  if (inprocess[0] === '0') return 'This function does not work for values below zero';
  let sum = 0;
  for (let i=0; i < inprocess.length; i++) {
    sum =  sum + parseInt(inprocess[i]);
  }

  return sum;
};
