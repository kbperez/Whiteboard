'use strict';

const solution = module.exports = {};

solution.fibi = function(n){
  //validate input
  if (n === undefined) return null;
  if (n < 0) return 'Negative values not allowed';
  if (!Number.isInteger(n)) return 'Input must be an integer';

  let sequence=[0, 1]; //because first two entries are equal to index

  //set keys on object that correspond to first array elements
  for(let i=2; i<n+1; i++) {
    let temp = sequence[(i-1)] + sequence[(i-2)];
    sequence.push(temp);
    // console.log(sequence);
  }
  return sequence[n];
};

solution.fibr = function(n){
  //validate input
  if (n === undefined) return null;
  if (n < 0) return 'Negative values not allowed';
  if (!Number.isInteger(n)) return 'Input must be an integer';

  if (n <= 1) return n;
  return solution.fibr(n-1) + solution.fibr(n-2);
};
