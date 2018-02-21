'use strict';

let string1 = 'a code challenge in the morning needs coffee';

let string2 = 'az by cx';


function score(input) {

  let copy = input.split(' ');

  for (let i=0; i<copy.length; i++) {
    let highest, inprocess;
    let max=0;
    let letters = copy[i].split('');
    for (let j=0; j<letters.length; j++) {

      inprocess = inprocess + (copy[i].charCodeAt(j)-96);
      if (inprocess > max) {
        highest = copy[i];
        max=inprocess;
        }
    }
      return highest;
  }
}

console.log(score(string1));
console.log(score(string2));
