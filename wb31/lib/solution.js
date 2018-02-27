'use strict';

module.exports =  function (arr1, arr2) {
  //validate input
  if (!arr1 && !arr2) return null;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Input must be an array';

  //create empty object to hold manipulated elements
  let result = {};
  let answer=[];
  //set keys on object that correspond to first array elements
  for(let i=0; i<arr1.length; i++) {
    result[arr1[i]] = true;
  }

  //check to see if a key exists for second array element and push to new array if it does
  for (var j=0; j < arr2.length; j++) {
    if (result[arr2[j]])answer.push(arr2[j]);
  }
//use Set functionality to filter out duplicate
  return Array.from(new Set(answer));
};
