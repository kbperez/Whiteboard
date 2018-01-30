'use strict';
const solution = module.exports = function (arr) {

  if(arr.length !== 99 || !Array.isArray(arr)) return 'Invalid input';

  let newArr = [0];

  for (let i = 0, len = arr.length; i < len; i++) {
    let index = arr[i];

    newArr[index] = index;
  }

  for (let j = 0, len = newArr.length; j < len ; j++) {
    let check = newArr[j+1] - newArr[j];

    if (check !== 1) {
      let answer = j+1;
      console.log('answer', answer);
      return answer;
    }
  }
};
