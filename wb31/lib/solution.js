'use strict';

module.exports =  function (arr1, arr2) {
  //validate input
  if (!arr1 && !arr2) return null;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Input must be an array';

  //create empty object to hold manipulated elements
  let result = {};
  let answer=[];

  for(let i=0; i<arr1.length; i++) {
    result[arr1[i]] = true;
    console.log(result);
  }

  for (var j=0; j < arr2.length; j++) {
    console.log(arr2[j]);
    if (result[arr2[j]])answer.push(arr2[j]);
  }
  console.log(answer);


  return Array.from(new Set(answer));
};
