'use strict';

const SLL = require('../lib/sll');
const solution = require('../lib/solution');
require('jest');

let test = new SLL;
test.insertEnd('cat');
test.insertEnd('dog');
test.insertEnd('fox');
test.insertEnd('pig');

let answer = new SLL;
answer.insertEnd('fox');
answer.insertEnd('pig');


let single = new SLL;
single.insertHead('pet');


describe('Solution Module', function() {

  describe('solution', () => {
    it('Should return null if not given input', () => {
      expect(solution()).toBeNull();
    });
    it('Should return null if provided invalid input', () => {
      expect(solution(3, 'test')).toBeNull();
      expect(solution('one', single)).toBeNull();
    });
    it('Should return an error message is the offset is not valid', () => {
      expect(solution(7, test)).toBe('The offset value is longer that the list.');
      expect(solution(1, single)).toBe('There is only one item in the test. No offset is possible.');
    });
    it('Should return the correct node', () => {
      expect(solution(1, test)).toEqual(test.head.next.next);
    });
  });
});
