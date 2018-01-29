'use strict';

function findMissing(arr) {

  let newArr = [0];

  for (let i = 1, len = arr.length; i < len; i++) {
    let index = arr[i];
    console.log('index', index);

    newArr[index] = index;
  }
  console.log(newArr);
  for (let j = 0, len = newArr.length; j < len ; j++) {
    let check = newArr[j+1] - newArr[j];
    console.log(check);
    if (check !== 1) {
      let answer = j+1;
      return answer;
    }
  }
}
