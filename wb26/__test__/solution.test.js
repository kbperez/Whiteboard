'use strict';

const utils = require('../lib/utils');
require('jest');

let cbMap = function(x) {
  return x * x;
};

let cbFilter = function(val) {
  return val > 2;
};

let cbReduce = function(a, b) {
  return a + b;
};

let arr = [1, 2, 3];

describe('valid map method', () => {
  it('should return a new array', () => {
    expect(utils.map(arr, cbMap)).toEqual([1, 4, 9]);
  });
});

describe('valid filter method', () => {
  it('should return a new array', () => {
    expect(utils.filter(arr, cbFilter)).toEqual([3]);
  });

});

describe('valid reduce method', () => {
  it('should return a value', () => {
    expect(utils.reduce(arr, cbReduce, 0)).toEqual(6);
  });
});

describe('invalid input', () => {
  it('should return null if missing arguments', () => {
    expect(utils.map(arr)).toBeNull();
    expect(utils.filter(arr)).toBeNull();
    expect(utils.reduce(arr)).toBeNull();
    expect(utils.map(cbMap)).toBeNull();
    expect(utils.filter(cbMap)).toBeNull();
    expect(utils.reduce(cbMap)).toBeNull();
  });
  it('should return null if arr is not an array', () => {
    expect(utils.map(1, cbReduce)).toBeNull();
    expect(utils.filter(1, cbReduce)).toBeNull();
    expect(utils.reduce(1, cbReduce)).toBeNull();
  });
  it('should return null if callback is not a function', () => {
    expect(utils.map(arr, 1)).toBeNull();
    expect(utils.filter(arr, 1)).toBeNull();
    expect(utils.reduce(arr, 1)).toBeNull();
  });
});
