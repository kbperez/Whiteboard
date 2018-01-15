'use strict';

function (arr) {

let reducer = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
let avg = reducer / arr.length;
let min = Math.min(...arr);
let max = Math.max(...arr);

return {highestValue: max, lowestValue: min, avgValue: avg}

}
