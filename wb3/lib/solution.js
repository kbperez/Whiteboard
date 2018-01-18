'use strict';

module.exports = function (engine) {

if (typeof engine !== 'object') return null

let headcount = 0;

let car = engine;

while (car) {
  if (!Number.isInteger(car.value)) {
    return 'only integers'
  } else {
    headcount +=  car.value;
    car = car.next;
  }
  }
  return headcount

}
