'use strict';

const SLL = require('../lib/sll');
const Stack = require('../lib/stack')
const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {

  let list = new SLL;
  let dedupeList = new SLL;

  list.insertHead(7);
  list.insertHead(12);
  list.insertHead(7);
  list.insertHead(7);
  list.insertHead(1);


  dedupeList.insertHead(7);
  dedupeList.insertHead(12);
  dedupeList.insertHead(7);
  dedupeList.insertHead(1);

  describe('solution', () => {

    it('Should return null if not provided valid SLL objects', () => {
      expect(solution('empty')).toBeNull();
    });
    it('Should return a SLL list without consecutive duplicates', () => {
      expect(solution(list)).toEqual(dedupeList);
    });
    it('Should return the original SLL list if no consecutive duplicates exist', () => {
      expect(solution(dedupeList)).toEqual(dedupeList);
    });
  });
});
