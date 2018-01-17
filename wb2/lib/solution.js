'use strict';

const solution = module.exports = function (arr) {

//check that input is an array
if (!Array.isArray(arr)) {return null}

//check that array contains only numberic values
if (arr.some(isNaN)) {return null}

//remove duplicate values
let noDuplicates = Array.from(new Set(arr));

//check that there are at least two values in array
if (noDuplicates.length < 2) {
  return null
  } else {
//Sort values from lowest to highest
  noDuplicates.sort(function(a, b) {
    return a - b;
  })
  return {
    high: noDuplicates[noDuplicates.length-1],
    nextHigh: noDuplicates[noDuplicates.length-2]}
  }
}
