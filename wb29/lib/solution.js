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

<<<<<<< HEAD
=======

>>>>>>> af9b0e93c02dec63ae20d93eea9bfd08e8f21ba2
    result[hashKey] ? result[hashKey].push(array[i]) : result[hashKey] = [array[i]];

    hashKey = '';

  }

  for(let property in result) {
    if(result[property]) {
      answer.push(result[property]);
    }
  }
<<<<<<< HEAD
=======

  return answer.reduce((a, b) => a.concat(b));
>>>>>>> af9b0e93c02dec63ae20d93eea9bfd08e8f21ba2

  return answer.reduce((a, b) => a.concat(b));
};
