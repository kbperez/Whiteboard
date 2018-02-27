'use strict';

module.exports =  function (array) {
  //validate input
  if (!array) return null;
  if (!Array.isArray(array)) return 'Input must be an array';

  //create empty object to hold manipulated elements
  let result = {};
  let hashKey='';
  let answer=[];

  for(let i=0; i<array.length; i++) {

    if (typeof array[i] !== 'string') return 'Array elements must be strings';

    hashKey = array[i].split('').sort().join('');

    result[hashKey] ? result[hashKey].push(array[i]) : result[hashKey] = [array[i]];

    hashKey = '';

  }

  // for (keys in result) answer.push(results)
  for(let property in result) {
    if(result[property]) {
      answer.push(result[property]);
      console.log('answer', answer);
    }
  }

  return answer.reduce((a,b) => a.concat(b));

};
