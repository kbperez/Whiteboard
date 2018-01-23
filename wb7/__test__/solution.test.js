'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {

  it('should return null for no input', function() {
    expect(solution()).toBe(null);
  });

  it('should return null for an empty object', function() {
    let emptyList = {};
    expect(solution(emptyList)).toBe(null);
  });

  it('should return false if list.next = null', function() {
    let listNotCircle = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
    expect(solution(listNotCircle)).toBe(false);
  });

  it('should return true if the list is circular', function() {
    let listCircle = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
    listCircle.next.next = listCircle.next;
    expect(solution(listCircle)).toBe(true);
  });

});
