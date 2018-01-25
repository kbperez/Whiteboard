'use strict';

const SLL = require('../lib/sll');
const solution = require('../lib/solution');
require('jest');

let list1= new SLL;
list1.insertHead(1);
list1.insertEnd(7);
list1.insertEnd(8);
list1.insertEnd(12);

let list2 = new SLL;
list2.insertHead(7);
list2.insertEnd(83);

let list3 = new SLL;
list3.insertHead(2);
list3.insertHead(19);

describe('Solution Module', function() {

  describe('solution', () => {
    it('Should return null if not given input', () => {
      expect(solution()).toBeNull();
    });
    it('Should return null if not provided valid SLL objects', () => {
      expect(solution({head:null}, list1)).toBeNull();
    });
    it('Should return an empty SLL list if no intersections exist', () => {
      expect(solution(list1, list3)).toEqual({head: null});
    });
    it('Should return a SLL list of intersections', () => {
      expect(solution(list1, list2)).toEqual({head: {value: 7, next: null}});
    });
  });
});
