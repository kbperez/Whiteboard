'use strict'

const TreeNode = require('../lib/tree-node');
const BinaryTree = require('../lib/binary-tree')
const solution = require('../lib/solution');
require('jest');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);
let ten = new TreeNode(10);

let binaryTree = new BinaryTree();
binaryTree.root = one;
one.left = two;
one.right = three;
two.left = four;

let sameTree = new BinaryTree();
sameTree.root = five;
five.left = six;
five.right = seven;
six.left = eight;


let differentTree = new BinaryTree();
differentTree.root = ten;
ten.right = eight;

let noTree = new BinaryTree();
noTree.root = nine;

describe('Binary-tree structure', function() {
  describe('Valid output', function() {
    it('should return true for the same structure', function() {
      expect(solution(binaryTree, sameTree)).toBe(true);
    });
    it('should return false for different structure', function() {
      expect(solution(binaryTree, differentTree)).toBe(false);
    });
  })
  describe('Invalid input', function() {
    it('should reject incorrect input', () =>{
      expect(solution()).toEqual('Invalid input');
      expect(solution(binaryTree)).toEqual('Invalid input');

    })

    it('should accept two binary trees', () => {
      expect(solution()).toEqual('Invalid input');
      expect(solution(differentTree, nine)).toEqual('Invalid structure');
      expect(solution('tree1', 'tree2')).toEqual('Invalid structure');
    })
  })
})
