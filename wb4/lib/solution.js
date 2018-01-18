'use strict';

const solution = module.exports = function (arr1, arr2) {

//check that there are exactly two parameters
if (!(arr1 || arr2)) return null

//check that inputs are arrays
if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null

//check that for intersection
let intersection = [];
  for(let i = 0; i < arr1.length; i++){
    for(let k = 0; k < arr2.length; k++){
        if(arr1[i] === arr2[k]){
            intersection.push( arr1[i]);
        }
    }
  }
return (intersection.length >= 1) ? intersection : 'no match';
}
